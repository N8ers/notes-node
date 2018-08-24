console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('N8ers'));

var filteredArray = _.uniq(['N8ers', 1, 'N8ers', 1, 2, 3, 4]);
console.log(filteredArray);

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

// console.log('Result:', notes.add(9, -2));