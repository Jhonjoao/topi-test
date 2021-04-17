const axios = require('axios');

async function run(){
    const meals = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')

    return meals;
}

module.exports = { run };