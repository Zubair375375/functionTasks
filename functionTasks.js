// TASK 1
let takeInput = prompt("Enter name");
displayWelcomeMessage = function () {
  alert("Welcome " + takeInput);
};
displayWelcomeMessage();

// TASK 2
let anArray = [
  "Be the change you wish to see in the world.",
  "Embrace the glorious mess that you are.",
  "Believe you can, and you're halfway there.",
  "Life is short, make it sweet.",
  "Happiness is not by chance, but by choice.",
  "Where there is love, there is life.",
  "Stay curious, stay humble.",
  "Chase your dreams, not your tail.",
  "Find joy in the journey.",
  "Bloom where you are planted.",
];

let generateQuote = function () {
  let randomNum = Math.floor(Math.random() * anArray.length);
  console.log(anArray[randomNum]);
};

generateQuote();

// TASK 3
let randomNumber;
let generateRandomNumber = function () {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
  randomNumber = randomNum;
};
generateRandomNumber();
let randomNumberDisplay = document.getElementById("randomNumberDisplay");
randomNumberDisplay.textContent = "Random Number: " + randomNumber;
