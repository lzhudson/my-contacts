const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();
    return response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);
    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }
    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(400).json({ error: 'Category not found' });
    }

    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.update(id, { name });

    return response.json(category);
  }
}

module.exports = new CategoryController();
