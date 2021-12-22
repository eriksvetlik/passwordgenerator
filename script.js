// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var characterArray = [];
var userPassword = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // prompt to ask the user how long the password should be
  var lengthChoice = prompt("Please choose a length between 8-128 characters.");
  if (lengthChoice < 8 || lengthChoice > 128) {
    confirm("Length must be between 8-128 characters.");
    generatePassword();
    return;
  } else {
    console.log("lengthChoice:", lengthChoice);
  }

  // the user confirms whether they'd like to include lower characters
  var lowerChoice = confirm("Include lower characters?");
  if (lowerCharacters) {
    characterArray = characterArray.concat(lowerCharacters);
    console.log("lowerChoice:", lowerChoice);
    console.log(characterArray);
  }

  // the user confirms whether they'd like to include upper characters
  var upperChoice = confirm("Include upper characters?");
  if (upperCharacters) {
    characterArray = characterArray.concat(upperCharacters);
    console.log("upperChoice:", upperChoice);
    console.log(characterArray);
  }

  // the user confirms whether they'd like to include numbers
  var numberChoice = confirm("Include numbers?");
  console.log("numberChoice:", numberChoice);

  // the user confirms whether they'd like to special characters
  var specialChoice = confirm("Include special characters?");
  console.log("specialChoice:", specialChoice);

  // if the user does not select a character choice, they'll need to start over
  if (!lowerChoice && !upperChoice && !numberChoice && !specialChoice) {
    confirm("At least one character option must be selected.");
    generatePassword();
    return;
  }

  // Randomly generate password string from choices

  // array of all chosen characters, concat?
  // choose from the all options arr number of chars required(length prompt)
  // For loop, run based on length prompt

  for (var i = 0; i < lengthChoice; i++) {
    userPassword +=
      characterArray[Math.floor(Math.random() * characterArray.length)];
  }

  // Math.random choose index postions from array
  // var foodItems = ["Bannana", "Apple", "Orange"];
  // var theFood = foodItems[Math.floor(Math.random() * foodItems.length)];
  // grab from chosen array, add to password array
  // convert array to string
  // return string
  // alert with password to the screen
  // display password in text box- write to page
}
