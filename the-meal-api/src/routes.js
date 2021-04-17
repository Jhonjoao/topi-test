const express = require('express');
const categoriesController = require('./controllers/categories.controller');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json("Sucess");
})

//list all meals categories
routes.get('/categories', categoriesController.index);


module.exports = routes;