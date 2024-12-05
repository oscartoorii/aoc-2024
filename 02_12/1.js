const fs = require('fs');

const fileContent = fs.readFileSync('input.csv', 'utf8');
const data = fileContent.split('\n').map(e => e.trim().split(" ").map(e2 => parseInt(e2)));

/////////////////////// ANSWER ///////////////////////

const safeReports = data.reduce((a, e) => {
    const allAscending = e.every((e2, i2) => e[i2+1] ? e2 < e[i2+1] : true)
    const allDescending = e.every((e2, i2) => e[i2+1] ? e2 > e[i2+1] : true)
    if (!(allAscending || allDescending)) return a
    if (!e.every((e2, i2) => e[i2+1] ? (Math.abs(e2 - e[i2+1]) >= 1 && Math.abs(e2 - e[i2+1]) <= 3) : true)) return a
    return a + 1;
}, 0)
console.log(safeReports)