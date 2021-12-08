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

  async store(request, response) {
    // post one register
    const {
      name, phone, email, category_id,
    } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    const contactExists = await ContactsRepository.findByEmail(email);
    if (contactExists) {
      return response.status(400).json({ error: 'This is e-mail is already been taken' });
    }
    const contact = await ContactsRepository.create({
      name, phone, email, category_id,
    });
    return response.json(contact);
  }

  update() {
    // update register
  }

  async delete(request, response) {
    // delete register
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);
    return response.sendStatus(204);
  }
}
// Sigleton
module.exports = new ContactController();
