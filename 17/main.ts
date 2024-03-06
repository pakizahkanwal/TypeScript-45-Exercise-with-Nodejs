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

//Inform that only two guests can be invited for dinner 
console.log("Unfortunattely, the new dinner table wont arrive on time ,so I can only invite two Guests to dinner with me")  
// Using while-loop to remove guests from the array until only two names remain 

while(guestList.length > 2){ 
  let removedGuest = guestList.pop(); 
  console.log(`Sorry, ${removedGuest} Icant invite you to dinner`); 

}  
//Sending a invitation to the last two guest on the list
console.log("invitation to the last 2 Guest");  

// Removeing last two Guests from the list 
guestList.forEach(lasttwo =>console.log(`Luckly ${lasttwo}, you are still invited to dinner`)); 
guestList.pop();  
guestList.pop(); 
console.log("Empty List ;", guestList);