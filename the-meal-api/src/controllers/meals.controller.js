const getAllMeals = require('../services/getAllMeal'); 

async function index(req, res){
    const all_meals =  await getAllMeals.run();

    let list_meal = []


    all_meals.data.meals.map((meal) => {
        let obj_filtered = {
            id: meal.idMeal,
            name: meal.strMeal
        }
        list_meal.push(obj_filtered)
    })

    return res.json(list_meal);
}

module.exports = { index }