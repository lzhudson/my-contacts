const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    return response.json(contacts);
    // get multiplies registers
  }

  async show(request, response) {
    // get one register
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    return response.json(contact);
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
