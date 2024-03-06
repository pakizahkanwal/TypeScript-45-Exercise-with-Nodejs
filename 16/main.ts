 // Creating a Guest List Array

 let guestList = ["Pakizah", "Maham", "Zobia", "Sadia"];
// making variable for those guest who cant come
let dontCome = guestList[0]; 

// Print the name of guest who cant come
console.log(dontCome, "Naii Ahh Sakty han"); 

// Add or Remove Values from a Bigger Table
guestList.splice(0, 1," Maliha"); 

// Message Print For Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner."); 

//Adding a new value at starting index of array 
guestList.unshift("Ali");

// adding a new value at ending index of array 
guestList.push("Zain"); 

// Get a middle index   array  of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2) 

// Adding a new guest to middle of array  
guestList.splice( middleIndex, 0 , "Osama"); 

// Print Message of Updated List
console.log ("Updated List of our Guests"); 

// Sending a invitation to our guests one by one with their names

guestList.forEach (oneguest => console.log(`Salam ${oneguest},would you like to dinner with me`));