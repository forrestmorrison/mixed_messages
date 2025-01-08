// word choices

const firstWords = ["DJ", "The", "Big", "Lil", "Super", "Master"];
const secondWords = ["Epic", "Rockin", "Amazing", "Gnarly", "Basic", "Cringe"];
const thirdWords = ["Maestro", "Party Starter", "Inuendo", "Computer", "Afficionado", "Spaceman"];

// event handlers

const button = document.getElementById("button");

const firstWordTarget = document.getElementById("firstWord");
const secondWordTarget = document.getElementById("secondWord");
const thirdWordTarget = document.getElementById("thirdWord");

// randomizer functions

const chooseFirstWord = () => {
    let word = Math.floor(Math.random() * firstWords.length);
    let wordChoice = firstWords[word];
    firstWordTarget.innerHTML = wordChoice;
}

const chooseSecondWord = () => {
    let word = Math.floor(Math.random() * secondWords.length);
    let wordChoice = secondWords[word];
    secondWordTarget.innerHTML = wordChoice;
}

const chooseThirdWord = () => {
    let word = Math.floor(Math.random() * thirdWords.length);
    let wordChoice = thirdWords[word];
    thirdWordTarget.innerHTML = wordChoice;
}

button.addEventListener("click", chooseFirstWord);
button.addEventListener("click", chooseSecondWord);
button.addEventListener("click", chooseThirdWord);