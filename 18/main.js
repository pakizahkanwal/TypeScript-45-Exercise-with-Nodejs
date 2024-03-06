var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print its orginal order
var countiesToVisit = ["China", "Denmark", "Barzil", "Argentina"];
console.log("Orginal Order:", countiesToVisit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countiesToVisit, true).sort());
// Show that the array is still in its orginal order 
console.log("Still in Orginal Order: ", countiesToVisit);
// Print the Array in Reversed Order wihhout modifying the Actual Array List 
console.log("Reverse Order:", __spreadArray([], countiesToVisit, true).reverse());
// Show that the array is still in its orginal order 
console.log("Still in Orginal Order: ", countiesToVisit);
// We haveChanged the Orginal Array order Now
console.log("Orginal Array Reversed:", countiesToVisit.reverse());
// Print the array to show that it's back to orginal order 
console.log("Back to Orginal Order:", countiesToVisit.reverse());
// Print the array to show that it's order has been changed in the Alphabetical order now 
console.log("Sorted in Alphabetical Order:", countiesToVisit.sort());
// We haveChanged the Orginal Array order Now in reverse order again
console.log("Orginal Array Reversed again:", countiesToVisit.reverse());
