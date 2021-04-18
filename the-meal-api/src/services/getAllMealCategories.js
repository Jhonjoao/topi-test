const axios = require('axios');

async function run(){
    const categories = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php', {}, {

    })

    return categories;
}

module.exports = { run };