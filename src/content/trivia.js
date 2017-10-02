//constants
const axios = require('axios');
const _ = require('lodash')
const quotesLink = "https://got-quotes.herokuapp.com/quotes";
const apiLink = "https://www.anapioficeandfire.com/api/";


//QUOTES GAME

//this array is pulled from the quotes link front page, plus a few that I added based on what the API returned (Sansa, Davos).
const quoteCharArr = [
  {"char": "bronn", "name": "Bronn of the Blackwater"},
  {"char": "brynden", "name": "Brynden Tully, the Blackfish"},
  {"char": "cersei lannister", "name": "Cersei Lannister"},
  {"char": "hound", "name": "Sandor Clegane, the Hound"},
  {"char": "jaime", "name": "Jaime Lannister"},
  {"char": "littlefinger", "name": "Petyr Baelish"},
  {"char": "olenna", "name": "Olenna Tyrell, the Queen of Thorns"},
  {"char": "renly", "name": "Renly Baratheon"},
  {"char": "tyrion", "name": "Tyrion Lannister"},
  {"char": "varys", "name": "Varys, the Spider"},
  {"char": "sansa", "name": "Sansa Stark"},
  {"char": "davos", "name": "Davos Seaworth, the Onion Knight"}
];

//to be populated with three incorrect and one correct answer object
let answersArr = [
  {}
];

//on componentDidMount:

//function to get random quote from quote API; exported to services file
export function fetchRandomQuote () {
  axios.get(quotesLink);
  //set state: quote (from response)
}

//match character from random quote to array of possible answers. if there is an answer, proceed; if not, repeat the fetch request (this is because there are some characters and quotes that are incorrectly attributed or just very uncommon)
export function getCorrectAnsObj (input) {
  //TO DO: link input to user input on trivia page (set state)
  let quoteChar = _.lowerCase(input);
  let correctAnsObj = { "answer": "", "isCorrect": true, "name": "" }
  if (_.find(quoteCharArr, ['char', quoteChar])) {
    //TO DO: update state with correct answer
    correctAnsObj.name = (_.find(quoteCharArr, ['char', quoteChar])).name
    correctAnsObj.answer = quoteChar;
    answersArr.push(correctAnsObj);
    return correctAnsObj;
  }
  else {
    //TO DO: repeat the operation to pull a new quote and match the new quote character

  }
}

// export function getIncorrectAnsObj(correctChar, answersArr) {
//   //TO DO: get correct answer character from state, then:
//   for (let i = answersArr.length; i < 4; i++) {
//     let randomCharArr = _.shuffle(quoteCharArr);
//     let incorrectAnsObj = { "answer": "", "isCorrect": false };
//     let randomChar = randomCharArr[i];
//     if (randomCharArr[i].char !== correctChar) {
//       incorrectAnsObj.name = randomChar.name;
//       incorrectAnsObj.answer = randomChar.char;
//       answersArr.push(incorrectAnsObj)
//     }
//   }
//   answersArr = _.shuffle(answersArr)
//   this.setState({ "answersArr": answersArr})
//   return answersArr;
// }

//TO DO:

//user select button onclick changes answer state to answer.
//user submit button onsubmit:
  //prevents default, sets state and compares state answer to correct answer.
  //if correct: display correct answer alert and user correct answer count gets added one.
  //if incorrect: display incorrect answer alert and user incorrect answer count gets added one.

// console.log(getIncorrectAnsObj());
