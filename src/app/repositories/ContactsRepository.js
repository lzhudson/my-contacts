const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Hudson Holanda',
    email: 'hudson@gmail.com',
    category_id: v4(),
  },
];
class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
