const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products 
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category 
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value 
  try {
    const categoryId = req.params.id;
    const updatedCategory = Category.update(req.body, {
      where: { id: categoryId },
    });

    if (!updatedCategory[0]) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json({ message: 'Category updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
