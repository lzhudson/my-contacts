const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    return response.json(contacts);
    // get multiplies registers
  }

  show() {
    // get one register
  }

  store() {
    // post one register
  }

  update() {
    // update register
  }

  delete() {
    // delete register
  }
}
// Sigleton
module.exports = new ContactController();
