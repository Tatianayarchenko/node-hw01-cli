const { program } = require('commander');

const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case 'get':
      const oneContact = await contacts.getContactById(id);
      console.log('oneContact', oneContact);
      break;

    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
      console.log('newContact', newContact);
      break;

    case 'remove':
      const deleteContact = await contacts.removeContact(id);
      console.log('deleteContact', deleteContact);
      break;

    default:
      console.log('\x1B[31m Unknown action type!');
      break;
  }
};

program
  .option('-a, --action <type>')
  .option('-i, --id <type>')
  .option('-n, --name <type>')
  .option('-e, --email <type>')
  .option('-p, --phone <type>');

program.parse();

const options = program.opts();
invokeAction(options);
