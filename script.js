// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var passwordLength = prompt("How long would you like the password to be? Please enter a number between 8-128 for the number of characters.")
var hasLowercase = confirm("Do you want your password to have Lowercase letters? Click 'OK' to confirm or 'Cancel' to skip.")
var hasUppercase = confirm("Do you want your password to have Uppercase letters? Click 'OK' to confirm or 'Cancel' to skip.")
var hasNumeric = confirm("Do you want your password to have Numbers? Click 'OK' to confirm or 'Cancel' to skip.")
var hasSpecialCharacters = confirm("Do you want your password to have Special characters ($@%&*, etc)? Click 'OK' to confirm or 'Cancel' to skip.")
return {
  passwordLength,
  hasLowercase,
  hasUppercase,
  hasNumeric,
  hasSpecialCharacters
}
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

// Function to generate password with user input
function generatePassword() {
var passwordOptions = getPasswordOptions()
console.log(passwordOptions)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);