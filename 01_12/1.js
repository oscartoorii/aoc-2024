const { parse } = require('csv-parse/sync');
const fs = require('fs');
const csvData = fs.readFileSync('input.csv', 'utf-8');
const data = parse(csvData, {
    delimiter: '   ',
    skipEmptyLines: true
});

/////////////////////// ANSWER ///////////////////////

const row1 = data.map(e => e[0])
const row2 = data.map(e => e[1])
row1.sort();
row2.sort();
const diff = row1.reduce((a, e, i) => a + (Math.abs(e - row2[i])), 0)
console.log(diff)