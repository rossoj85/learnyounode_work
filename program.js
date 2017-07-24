
//2. baby steps
//console.log(process.argv.slice(2).reduce((a,b)=>Number(a)+Number(b)));

//3 My first I/O

// var fs = require('fs')

// var contents  = fs.readFileSync(process.argv[2]).toString()
// var array = contents.split('\n')
// var length =array.length-1

// console.log(length)

//4 My first async I/0

var fs =require('fs')

fs.readFile(process.argv[2],'utf8', function(err,fileContents){
	var contents = fileContents
	var array = contents.split('\n')
	console.log(array.length-1);
});
