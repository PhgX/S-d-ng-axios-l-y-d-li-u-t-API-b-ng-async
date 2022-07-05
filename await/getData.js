axios = require('axios');

async function getJSONAsync(){
    let json = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
    return json;
}

getJSONAsync().then(result => console.log(result.data));
