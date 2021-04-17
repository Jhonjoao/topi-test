const getMeals = require('../services/allMealCategories'); 

async function index(req, res){
    const categories =  await getMeals.run();

    return res.json(categories.data);
}

module.exports = { index }