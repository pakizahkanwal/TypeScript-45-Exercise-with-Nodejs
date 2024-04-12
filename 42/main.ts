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

// Call make_great function to modify magicians names
 let great_magicians = make_great(magician_names);

 // Call show_magicians that show modified list of magicians
 console.log(great_magicians)
 show_magicians(great_magicians)