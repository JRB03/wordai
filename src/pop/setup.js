const popwords = require('./popwords.js');

const f = require('fs');
const chars = require('./chars.js');
const { strictEqual } = require('assert');

var array = f.readFileSync('./xwords.txt').toString().split("\r\n");

let words = [];

// allWords.arr.forEach( p => {
//     array.forEach( w => {
//         if(p === w) {
//             words.push(p);
//         }
//     })
// });

array.forEach( w => {
    let pop = 0;
    let used = [];
    for(let c = 0; c < w.length; c++) {
        let ca = w.charAt(c);
        if(!used.includes(ca)) pop += chars.map[ca];
        used.push(ca);
    }
    words.push({word: w,pop: pop})
});

words.sort((a,b) => b.pop - a.pop);


let content = "let arr = [";
words.forEach( o => {
    content += '"' + o.word + o.pop + '",';
});
content += "]"

f.writeFile('./words.js',content,()=>{});









