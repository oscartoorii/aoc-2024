const fs = require('fs');

const fileContent = fs.readFileSync('input.csv', 'utf8');
const data = fileContent.trim()

/////////////////////// ANSWER ///////////////////////

const regex = /mul\((-?\d+),(-?\d+)\)/g;
const multiplications = data.match(regex);
const sum = multiplications.reduce((a, e) => {
    return a + e.substring(4, e.length-1).split(",").reduce((a2, e2) => a2*parseInt(e2), 1)
}, 0)
console.log(sum)