// Define the function to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magician_names through .map() it will modify array 
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry Poter", "Hamza", "Hamoon"];
// Call make_great function to modify magicians names
var great_magicians = make_great(magician_names);
// Call show_magicians that show modified list of magicians
console.log(great_magicians);
show_magicians(great_magicians);
