const getMeals = require('../services/getAllMealCategories'); 

async function index(req, res){
    const categories =  await getMeals.run();

    return res.json(categories.data.categories);
}

module.exports = { index }