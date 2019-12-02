const path = require('path');
const fs = require('fs');
const xlsx = require('node-xlsx');

const filePath = path.join(__dirname,'example.xlsx');
const file = fs.readFileSync(filePath, 'utf8');

/*
// Parse a file
const workSheetsFromFile = xlsx.parse(filePath);
console.log('workSheetsFromFile',JSON.stringify(workSheetsFromFile, null, 2));
*/


// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(filePath);
console.log('workSheetsFromFile',JSON.stringify(workSheetsFromBuffer, null, 2));
