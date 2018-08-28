var person = {
    name: 'N8ers',
};

person.age = 24;

debugger;

person.name = "Mike";

console.log(person);

//to debug in the console type below
//node inspect <file name>

//'break on start' -> 

//debug commands
// debug> list(10) <gives the first 10 lines wrapped to view them
// debug> n        <next statement, pulls out of wrapper 
// debug> c        <continues into program completes 
// ctr + c         <2x to get out of debugging 
// debug> repl     <like inspector tool, you can change varibles and stuff for testing
// you can also use a debugger statement like on line 7

// you can also run nodemon with inspect like below
// nodemon inspect app.js read --title="to buy"
// this will create an auto run debugger 