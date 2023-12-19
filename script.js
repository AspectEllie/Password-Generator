// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt(
    "How long would you like the password to be? Please enter a number between 8-128 for the number of characters."
  );
  var hasLowercase = confirm(
    "Do you want your password to have Lowercase letters? Click 'OK' to confirm or 'Cancel' to skip."
  );
  var hasUppercase = confirm(
    "Do you want your password to have Uppercase letters? Click 'OK' to confirm or 'Cancel' to skip."
  );
  var hasNumeric = confirm(
    "Do you want your password to have Numbers? Click 'OK' to confirm or 'Cancel' to skip."
  );
  var hasSpecialCharacters = confirm(
    "Do you want your password to have Special characters ($@%&*, etc)? Click 'OK' to confirm or 'Cancel' to skip."
  );
  return {
    passwordLength,
    hasLowercase,
    hasUppercase,
    hasNumeric,
    hasSpecialCharacters,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {

  // Get initial user input
  var passwordOptions = getPasswordOptions();

  // check that user has picked at least one character option, if not reprompt until they do
  while (
    passwordOptions.hasLowercase === false &&
    passwordOptions.hasUppercase === false &&
    passwordOptions.hasNumeric === false &&
    passwordOptions.hasSpecialCharacters === false
  ) {
    alert("Please pick at least one character type");
    passwordOptions = getPasswordOptions();
  }

  // Initiailising chosen characters list
  var chosenCharacters = [];

  // If user picked lower case letters add them to choosen characters list
  if (passwordOptions.hasLowercase === true) {
    chosenCharacters = chosenCharacters.concat(lowerCasedCharacters);
  }

  // If user picked upper case letters add them to choosen characters list
  if (passwordOptions.hasUppercase === true) {
    chosenCharacters = chosenCharacters.concat(upperCasedCharacters);
  }

  // If user picked numeric characters add them to choosen characters list
  if (passwordOptions.hasNumeric === true) {
    chosenCharacters = chosenCharacters.concat(numericCharacters);
  }

  // If user picked special characters add them to choosen characters list
  if (passwordOptions.hasSpecialCharacters === true) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }

  // Initialise password string
  var password = "";
  
  // For each character in the choosen length, generate a random character from the chosen characters list
  for (var index = 0; index < passwordOptions.passwordLength; index++) {
    password += getRandom(chosenCharacters);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
