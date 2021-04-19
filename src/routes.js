const express = require('express');
const categoriesController = require('./controllers/categories.controller');
const mealsController = require('./controllers/meals.controller');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json("Sucess");
})

//list all meals categories
routes.get('/categories', categoriesController.index);

routes.get('/list-meals', mealsController.index);

module.exports = routes;