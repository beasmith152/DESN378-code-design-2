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
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
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
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}