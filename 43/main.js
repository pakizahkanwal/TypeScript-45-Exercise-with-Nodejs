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
// Making a copy of Original array through .slice() function 
var copy_magician_names = magician_names.slice();
// Modify the copied array to inculde "The Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// Show both array Original and Copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
