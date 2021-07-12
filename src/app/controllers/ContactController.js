const ContactsRepositories = require('../repositories/ContactsRepositories');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactsRepositories.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepositories.findById(id);

    if (!contact) return response.status(404).json('User not found!');

    return response.json(contact);
  }

  async store(request, response) {
    const {
      id, name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactsRepositories.findByEmail(email);

    if (contactExist) {
      return response.status(400).json({ error: 'This e-mail already in use' });
    }

    const contact = await ContactsRepositories.create({
      id, name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExist = await ContactsRepositories.findById(id);
    if (!contactExist) {
      return response.status(400).json({ error: 'Contact not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactsRepositories.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail already in use' });
    }

    const contact = await ContactsRepositories.update(id, {
      name, email, phone, category_id,
    });
    return response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactsRepositories.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
