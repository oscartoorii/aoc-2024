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
const countMap = {}
row2.forEach(e => countMap[e] = (countMap[e] ?? 0) + parseInt(e));
const score = row1.reduce((a, e) => a + (countMap[e] ?? 0), 0)
console.log(score)