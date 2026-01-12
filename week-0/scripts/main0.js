// Store a reference to the <h1> in a variable
//const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
//myHeading.textContent = "Hello world!";

//the code above is part of the initial tutorial and has been commented out. Had to comment out due to CONST for myheading for step 7 of the assignment.

// image portion of assignment

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/anime.webp");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

//button portion of assignment for changing the user and the heading.

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `JS is alright, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `JS is alright, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
// for null result in names
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `JS is alright, ${myName}`;
  }
}

/*
  SUMMARY:
  This file/exercise does two things:
  1. The image changer in this manner allows the user to click on the image and have it change to a different image when clicked through the function used above. Its only const is the source, and it's else is conditionally set to the original image.
  2. The welcome message is standardly set through local storage of what name was used last in case no input is set. Second, if an name is set it changes the content of the h1 where it is positioned to that name. This is all done through the button. The null value code ensures that a name is input before the next step is taken to eliminate possibiltiy of a null. 
​
  The key pattern I learned: Originally, when setting up week 0, I had trouble with the main.js connecting to the html for this particular exercise due to a main.js existing within my structure due to the original page I already began developing. Therefore, I had to change it's path and name to differentiate to main0.js syntax for the week. However, it did work. Same thing with eliminating the const for the initial heading as the const sets a variable making the third exercise not work entirely. 
*/