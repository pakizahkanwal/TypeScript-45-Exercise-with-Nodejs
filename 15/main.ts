let guestList =["Pakizah", "Maham", "Zobia", "Sadia"];

let dontCome = guestList[0];

console.log("dontCome, Nai Ahh skta");

guestList.splice(0, 1, "Maliha");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like toDinner with me?`));