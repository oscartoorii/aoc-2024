const fs = require('fs');

const fileContent = fs.readFileSync('input.csv', 'utf8');
const data = fileContent.split('\n').map(e => e.trim().split(""))

/////////////////////// ANSWER ///////////////////////

let words = 0;
data.forEach((row, rowi) => {
    row.forEach((letter, letteri) => {
        if (letter == "A") {
            if (rowi-1 >= 0 && 
                rowi+1 < data.length && 
                data[rowi-1][letteri-1]=="M" && 
                data[rowi-1][letteri+1]=="M" && 
                data[rowi+1][letteri+1]=="S" && 
                data[rowi+1][letteri-1]=="S") { words++ }
            if (rowi-1 >= 0 && 
                rowi+1 < data.length && 
                data[rowi-1][letteri-1]=="S" && 
                data[rowi-1][letteri+1]=="M" && 
                data[rowi+1][letteri+1]=="M" && 
                data[rowi+1][letteri-1]=="S") { words++ }
            if (rowi-1 >= 0 && 
                rowi+1 < data.length && 
                data[rowi-1][letteri-1]=="S" && 
                data[rowi-1][letteri+1]=="S" && 
                data[rowi+1][letteri+1]=="M" && 
                data[rowi+1][letteri-1]=="M") { words++ }
            if (rowi-1 >= 0 && 
                rowi+1 < data.length && 
                data[rowi-1][letteri-1]=="M" && 
                data[rowi-1][letteri+1]=="S" && 
                data[rowi+1][letteri+1]=="S" && 
                data[rowi+1][letteri-1]=="M") { words++ }
        }
    })
})

console.log(words)