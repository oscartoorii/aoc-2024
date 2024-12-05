const fs = require('fs');

const fileContent = fs.readFileSync('input.csv', 'utf8');
const data = fileContent.split('\n').map(e => e.trim().split(""))

/////////////////////// ANSWER ///////////////////////

let words = 0;
data.forEach((row, rowi) => {
    row.forEach((letter, letteri) => {
        if (letter == "X") {
            if (rowi-3 >= 0 && data[rowi-1][letteri]=="M" && data[rowi-2][letteri]=="A" && data[rowi-3][letteri]=="S") { words++ }
            if (rowi-3 >= 0 && data[rowi-1][letteri+1]=="M" && data[rowi-2][letteri+2]=="A" && data[rowi-3][letteri+3]=="S") { words++ }
            if (data[rowi][letteri+1]=="M" && data[rowi][letteri+2]=="A" && data[rowi][letteri+3]=="S") { words++ }
            if (rowi+3 < data.length && data[rowi+1][letteri+1]=="M" && data[rowi+2][letteri+2]=="A" && data[rowi+3][letteri+3]=="S") { words++ }
            if (rowi+3 < data.length && data[rowi+1][letteri]=="M" && data[rowi+2][letteri]=="A" && data[rowi+3][letteri]=="S") { words++ }
            if (rowi+3 < data.length && data[rowi+1][letteri-1]=="M" && data[rowi+2][letteri-2]=="A" && data[rowi+3][letteri-3]=="S") { words++ }
            if (data[rowi][letteri-1]=="M" && data[rowi][letteri-2]=="A" && data[rowi][letteri-3]=="S") { words++ }
            if (rowi-3 >= 0 && data[rowi-1][letteri-1]=="M" && data[rowi-2][letteri-2]=="A" && data[rowi-3][letteri-3]=="S") { words++ }
        }
    })
})

console.log(words)