// Making a Array of Countries and Print its orginal order
let countiesToVisit: String[] = ["China", "Denmark", "Barzil", "Argentina"]; 
console.log ("Orginal Order:", countiesToVisit);  

// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:",[...countiesToVisit].sort()); 

// Show that the array is still in its orginal order 
console.log("Still in Orginal Order: ", countiesToVisit); 

// Print the Array in Reversed Order wihhout modifying the Actual Array List 
console.log("Reverse Order:",[...countiesToVisit].reverse()); 

// Show that the array is still in its orginal order 
console.log("Still in Orginal Order: ", countiesToVisit); 

// We haveChanged the Orginal Array order Now
console.log ("Orginal Array Reversed:",countiesToVisit.reverse()); 

// Print the array to show that it's back to orginal order 
console.log("Back to Orginal Order:",countiesToVisit.reverse()); 

// Print the array to show that it's order has been changed in the Alphabetical order now 
console.log("Sorted in Alphabetical Order:",countiesToVisit.sort());


// We haveChanged the Orginal Array order Now in reverse order again
console.log ("Orginal Array Reversed again:",countiesToVisit.reverse()); 


