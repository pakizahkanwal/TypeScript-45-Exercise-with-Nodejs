// Creating a Array 
var userName = ["Mahad", " Ali", "Zeeshan", " Admin", " Usman"];
// Using ForEach Loop on Array 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status reprot?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",think you for logging in  again."));
    }
});
