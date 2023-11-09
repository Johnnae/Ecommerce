// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsto(Category,{ 
  foreignKey: 'product_id'
})
// Categories have many Products 
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag) 

Product.belongsToMany(Tags, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  
  
});

Tag.belongsToMany(Products, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  
  
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
