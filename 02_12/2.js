const fs = require('fs');

const fileContent = fs.readFileSync('input.csv', 'utf8');
const data = fileContent.split('\n').map(e => e.trim().split(" ").map(e2 => parseInt(e2)));

/////////////////////// ANSWER ///////////////////////

const safeReports = data.reduce((a, e) => {
    const findFirstNotAscending = e.findIndex((e2, i2, a2) => a2[i2+1] ? !(a2[i2+1] > e2 && a2[i2+1] <= e2+3) : false)
    if (findFirstNotAscending == -1) { return a + 1 }
    const findFirstNotDescending = e.findIndex((e2, i2, a2) => a2[i2+1] ? !(a2[i2+1] < e2 && a2[i2+1] >= e2-3) : false)
    if (findFirstNotDescending == -1) { return a + 1 }

    const ascendingFilteredFirst = e.filter((e2, i2) => i2 != findFirstNotAscending)
    const ascendingFilteredSecond = e.filter((e2, i2) => i2 != findFirstNotAscending + 1)
    const ascendingFilteredFirstVerify = ascendingFilteredFirst.every((e2, i2, a2) => a2[i2+1] ? (a2[i2+1] > e2 && a2[i2+1] <= e2+3) : true)
    if (ascendingFilteredFirstVerify) { return a + 1 }
    const ascendingFilteredSecondVerify = ascendingFilteredSecond.every((e2, i2, a2) => a2[i2+1] ? (a2[i2+1] > e2 && a2[i2+1] <= e2+3) : true)
    if (ascendingFilteredSecondVerify) { return a + 1 }
    
    const descendingFilteredFirst = e.filter((e2, i2) => i2 != findFirstNotDescending)
    const descendingFilteredSecond = e.filter((e2, i2) => i2 != findFirstNotDescending + 1)
    const descendingFilteredFirstVerify = descendingFilteredFirst.every((e2, i2, a2) => a2[i2+1] ? (a2[i2+1] < e2 && a2[i2+1] >= e2-3) : true)
    if (descendingFilteredFirstVerify) { return a + 1 }
    const descendingFilteredSecondVerify = descendingFilteredSecond.every((e2, i2, a2) => a2[i2+1] ? (a2[i2+1] < e2 && a2[i2+1] >= e2-3) : true)
    if (descendingFilteredSecondVerify) { return a + 1 }
    return a
}, 0)
console.log(safeReports)