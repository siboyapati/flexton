// const {promisify} = require('util');
// const fs = require('fs');
//
// let readFileAsync = promisify(fs.readFile);
// let [executable, absPath, target, ...message] = process.argv;
// console.log('target',target);
//
// console.log(message.length ? message.join(' ') : `Running file ${absPath} using binary ${executable}`);
//
// readFileAsync(target, {encoding: 'utf8'})
// .then(console.log)
// .catch(err => {
//     let message = err.message;
//     console.log(`
//         An error occurred!
//         Read error: ${message}
//     `);
// });


var fs = require('fs');

let [executable, absPath, target, ...message] = process.argv;
var x = process.argv;
console.log('message',message);
console.log('x',x); /// executable, absPath ,

// fs.readFile('./dummy.txt', 'utf8', function (err, contents) {
//     console.log(contents);
// });
//
// var contents = fs.readFileSync('./dummy.txt', 'utf8');
// console.log(contents);


console.log('after calling readFile');