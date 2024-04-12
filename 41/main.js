// Define a funcation to print each magician name from an array 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magician_name = ["Harry Poter", "Hamza", "Hamoon"];
// Call the Function to print each magician name
show_magicians(magician_name);
