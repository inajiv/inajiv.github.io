const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// function setUserName() {
//   const myName = prompt("Please enter your name");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = `Mozila is coll, ${myName}`;

//   // "if the item with the key 'name' does not exist in the local storage
//   if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Mozila is coll, ${storedName}`;
//   }
// }

function setUserName() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUserName();
  } else {
    // WebApiStorage
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozila is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
