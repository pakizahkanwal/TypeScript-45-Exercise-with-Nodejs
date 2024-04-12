// Define the function to show magicians names 

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
 //function to make magician_names through .map() it will modify array 
function make_great(magicians: string[]){
  return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry Poter","Hamza","Hamoon"];

// Making a copy of Original array through .slice() function 
let copy_magician_names = magician_names.slice();

// Modify the copied array to inculde "The Great" with thier names
 let copy_great_magicians = make_great(copy_magician_names);

// Show both array Original and Copied

// Original
console.log("Original Array\n")
show_magicians(magician_names);


// Copied
console.log("\ncopied Array\n")
show_magicians(copy_great_magicians);