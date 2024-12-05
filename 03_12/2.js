const fs = require('fs');

const fileContent = fs.readFileSync('input.csv', 'utf8');
const data = fileContent.trim()

/////////////////////// ANSWER ///////////////////////

const regex = /(do\(\))|(don't\(\))|(mul\(-?\d+,-?\d+\))/g;
const multiplications = data.match(regex);
let allowMultiply = true;
const sum = multiplications.reduce((a, e) => {
    if (e.match(/don't\(\)/g)) { allowMultiply = false; return a }
    if (e.match(/do\(\)/g)) { allowMultiply = true; return a }
    if (!allowMultiply) { return a }
    return a + e.substring(4, e.length-1).split(",").reduce((a2, e2) => a2*parseInt(e2), 1)
}, 0)
console.log(sum)