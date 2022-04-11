let allWords = require('./allWords.js');

const f = require('fs');

var array = f.readFileSync('xwords.txt').toString().split("\r\n");

let words = [];

allWords.arr.forEach( p => {
    array.forEach( w => {
        if(p === w) {
            words.push(p);
        }
    })
});

let content = "let arr = [";
words.forEach( w => {
    content += '"' + w + '",';
});
content += "]"

console.log(allWords.arr.length);
console.log(words.length);









