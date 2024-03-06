var guestList = ["Pakizah", "Maham", "Zobia", "Sadia"];
var dontCome = guestList[0];
console.log("dontCome, Nai Ahh skta");
guestList.splice(0, 1, "Maliha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like toDinner with me?")); });
