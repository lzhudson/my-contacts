const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Hudson Holanda',
    email: 'hudson@gmail.com',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Ana Lis',
    email: 'analist@gmail.com',
    category_id: v4(),
  },
];
class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}

module.exports = new ContactsRepository();
