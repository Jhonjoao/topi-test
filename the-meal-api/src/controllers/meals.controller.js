const getAllMeal = require('../services/getAllMeal');

let meals 
async function index(req, res){
    const { page = 1 } = req.query;

    if(!meals){
        meals = await getAllMeal.run();
    }

    const final_itens = page * 10
    const init_itens = final_itens - 10

    let data = meals.slice(init_itens, final_itens)

    res.header('X-Total-Count', meals.length);

    return res.json(data)

}

module.exports = { index }