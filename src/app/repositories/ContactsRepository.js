const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Hudson Holanda',
    email: 'hudson@gmail.com',
    category_id: uuid(),
  },
];
class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
