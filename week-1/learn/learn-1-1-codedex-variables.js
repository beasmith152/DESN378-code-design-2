// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Bea Smith
// Date: 1/13/26
// ============================================
// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------
const firstName = "bea";
const favoriteColor = "pink";

let currentLocation = "spokane";
let mood = "anxious";

console.log(firstName);
console.log(favoriteColor);
console.log(currentLocation);
console.log(mood);

mood = "shit";

console.log(mood);

// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
let companyName = "Thomas Hammer";
let foundingYear = "1993";
let isActive = true;
let fundingAmount;

console.log(companyName);
console.log(foundingYear);
console.log(isActive); 
console.log(fundingAmount);
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
let farenheit = 32;

let celsius = (farenheit - 32)/1.8;
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
const panda = 12.99;
const powerade = 2.99;

let total = panda + powerade;

let tip = total * 0.2;

console.log("Receipt");
console.log("Panda Express: " + panda);
console.log("Powerade: " + powerade);
console.log("-------");
console.log("items total: " + total);
console.log("=======")
console.log(tip);
console.log("total with tip: " + (total + tip));     

// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------
const numberOfSongs = 327;
const avgSongLength = 3.5;

let totalMinutes = numberOfSongs * avgSongLength;

let hours = Math.floor(totalMinutes / 60);
let remainingMinutes = Math.floor(totalMinutes % 60);

console.log("My playlist is " + hours + " hours and " + remainingMinutes + " minutes long.");
