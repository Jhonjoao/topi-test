const axios = require('axios');
const fs = require('fs');
const path = require("path");

//função usada para capturar todas as refeições
async function run(){
    let meals = []
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    await Promise.all(alfabeto.map(async (letter) => {
        let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        if(res.data.meals){
            res.data.meals.map((meal) => {
                meal.id = meal.idMeal
                meals.push(meal)
            })
        }
    }));

    return meals;
}

module.exports = { run };