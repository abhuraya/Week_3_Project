// Assignment Code
var generateBtn = document.querySelector("#generate");

//opening function
function page(){

//character selection prompt
var characters = window.prompt("Please pick the number of characters you would like the password to be. It must be between 8 and 128 characters. ");


//function to check weather character amount satisfies numbering criteria
function charCheck(x){//main function is called if prompt input fails numbering criteria
   if (x > 128){
      page();
    }else if (x < 8){
      page();
    }
  }

//character checking function is called
charCheck(characters);


//prompts for various options for password content
var uppercaseChoice = window.confirm("Would you like to include uppercase letters?");
var lowercaseChoice = window.confirm("Would you like to include lowercase letters?");
var specialCharacters = window.confirm("Would you like to include special characters? (!@#$%*)");
var numberCharacters = window.confirm("Include numbers?");



// Function to be called when generate button is pressed
function writePassword() {


//arrays
var passwordText = document.querySelector("#password");
var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharactersoptions = "!@#$%*".split("");
var numbers = "0123456789".split("");
passwordArray = [];
password = [];


//conditionals based on user choice
if (uppercaseChoice === true){
  passwordArray.push(capitalLetters);
}

if (lowercaseChoice === true){
  passwordArray.push(lowercaseLetters);
}

if (specialCharacters === true){
  passwordArray.push(specialCharactersoptions);
}

if (numberCharacters === true){
  passwordArray.push(numbers);
}

//conditional which generates the final password in the display
for (var i = 0; i < characters; i++){
  var newItem = passwordArray[Math.floor(Math.random() * passwordArray.length)];
  var singleItem = newItem[Math.floor(Math.random() * newItem.length)];
  password.push(singleItem);
}

//modifiers and variables
passwordText.length = characters;
passwordText.textContent = password;


}



// event listener for generate button
generateBtn.addEventListener("click", writePassword);
}


//function called as page is initially loaded
page();