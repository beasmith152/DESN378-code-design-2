// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: Bea Smith
// Date: 1/23/2026
// ============================================
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
​let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
​let hour =11;
if(hour<12){
  console.log("good morning 🌞");
  console.log("Make Coffee");
  console.log("Check Emails");
}
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
​let hour =13;
if(hour<12){
  console.log("good morning 🌞");
  console.log("Make Coffee");
  console.log("Check Emails");
} else {
  console.log("Good afternoon ☁️");
  console.log("Make more Coffee");
  console.log("Go to the Gym");
}
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
let ph = 7;
if (ph>7){
  console.log("Basic.");
} else if(ph<7){
  console.log("Acidic.");
} else{
  console.log("Neutral");
}
// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
const question = "Is Codédex better than Udemy yet?";
const randomNumber = Math.floor(Math.random() * 9);
let answer = '';
if (randomNumber === 0) {
  answer = "Yes - definitely.";
} else if (randomNumber === 1) {
  answer = "It is decidedly so.";
} else if (randomNumber === 2) {
  answer = "Without a doubt.";
} else if (randomNumber === 3) {
  answer = "Reply hazy, try again.";
} else if (randomNumber === 4) {
  answer = "Ask again later.";
} else if (randomNumber === 5) {
  answer = "Better not tell you now.";
} else if (randomNumber === 6) {
  answer = "My sources say no.";
} else if (randomNumber === 7) {
  answer = "Outlook not so good.";
} else {
  answer = "Very doubtful.";
}
console.log(`Question:\t${question}`);
console.log(`Magic 8 Ball:\t${answer}`);
// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
​let aqi = 300;
if (aqi < 50){
  console.log("good");
} else if(aqi > 50 && aqi < 100){
  console.log("moderate");
} else if(aqi > 100 && aqi < 150){
  console.log("Unhealthy (Sensitive Groups)");
} else if(aqi > 150 && aqi < 200){
  console.log("Unhealthy");
} else{
  console.log("Hazardous");
}
// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
const rock = 0;
const scissors = 1;
const paper = 2;
let player = rock;
let computer = Math.floor(Math.random() * 3);
if (player === rock) {
  console.log("Player picked:      Rock");
} else if (player === scissors) {
  console.log("Player picked:      Scissors");
} else if (player === paper) {
  console.log("Player picked:      Paper");
} else {
  console.log("Something went wrong.");
}
if (computer === rock) {
  console.log("Computer picked     Rock");
} else if (computer === scissors) {
  console.log("Computer picked:    Scissors");
} else if (computer === paper) {
  console.log("Computer picked:    Paper");
} else {
  console.log("Something went wrong.");
}
if (player === computer) {
  console.log("You tied!");
} else if (player === rock && computer === paper) {
  console.log("The computer won!");
} else if (player === rock && computer === scissors) {
  console.log("The player won!");
} else if (player === paper && computer === rock) {
  console.log("The player won!");
} else if (player === paper && computer === scissors) {
  console.log("The computer won!");
} else if (player === scissors && computer === rock) {
  console.log("The computer won!");
} else if (player === scissors && computer === paper) {
  console.log("The player won!");
} else {
  console.log("Something went wrong.");
}