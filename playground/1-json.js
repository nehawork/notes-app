const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const data = dataBuffer.toString();

const user = JSON.parse(data);
user.name = "Neha Ramchandani";
user.age = 25;

fs.writeFileSync('1-json.json', JSON.stringify(user));