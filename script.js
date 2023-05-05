// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("What would you like your password length to be?(Please choose between 8 and 128 characters.)");

  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return
  }

  var upperCase = confirm("Would you like to include upper case letters? Y or N:");
  var lowerCase = confirm("Would you like to include lower case letters? Y or N:");
  var numbers = confirm("Would you like to include numbers? Y or N:");
  var specialCharacters = confirm("Would you like to include special characters? Y or N:");

  let characters = "";

  if (upperCase == true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCase == true) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbers == true) {
    characters += "0123456789";
  }

  if (specialCharacters == true) {
    characters += "!@#$%^&*()_+?></][}{.,:'";
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
