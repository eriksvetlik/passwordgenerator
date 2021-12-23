// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = [
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
var upper = [
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
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var passwordArray = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  password = "";
  passwordArray = [];

  // prompt to ask the user how long the password should be
  var lengthChoice = prompt("Please choose a length between 8-128 characters.");
  if (lengthChoice < 8 || lengthChoice > 128) {
    confirm("Length must be between 8-128 characters.");
    generatePassword();
    return;
  }

  // the user confirms whether they'd like to include lower characters / if yes, the lower array is added to passwordArray
  var lowerChoice = confirm("Include lower characters?");
  if (lowerChoice) {
    passwordArray = passwordArray.concat(lower);
  }

  // the user confirms whether they'd like to include upper characters / if yes, the upper array is added to passwordArray
  var upperChoice = confirm("Include upper characters?");
  if (upperChoice) {
    passwordArray = passwordArray.concat(upper);
  }

  // the user confirms whether they'd like to include numbers / if yes, the numbers array is added to passwordArray
  var numberChoice = confirm("Include numbers?");
  if (numberChoice) {
    passwordArray = passwordArray.concat(numbers);
  }

  // the user confirms whether they'd like to include special characters / if yes, the special array is added to passwordArray
  var specialChoice = confirm("Include special characters?");
  if (specialChoice) {
    passwordArray = passwordArray.concat(special);
  }

  // if the user does not select a character choice, they'll need to start over
  if (!lowerChoice && !upperChoice && !numberChoice && !specialChoice) {
    confirm("At least one character type must be selected.");
    generatePassword();
    return;
  }

  // a random character will be chosen from passwordArray for each instance variable "i" is less then the lengthChoice
  for (var i = 0; i < lengthChoice; i++) {
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

  //the password is converted to a string and the value is returned to the writePassword function
  password = password.toString();
  return password;
}
