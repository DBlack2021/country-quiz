import { codes } from "./data";

const URL = "https://restcountries.eu/rest/v2/alpha";

const indexOfCallback = (arr, callback, startIndex = 0) => {
  for(let i = startIndex; i < arr.length; i ++) {
      if (callback(arr[i])) {
          return i;
      }
  }
  return -1;
}

const getCountryData = async (code) => {
  const response = await fetch(`${URL}/${code}?fields=name;capital;alpha2Code`);
  const data = await response.json();
  return data;
}

const getRandomCountry = async (codesToUse) => {
  const randCode = codesToUse[Math.floor(Math.random() * codesToUse.length)];
  return getCountryData(randCode);
}

const getRandomChoices = async (correctCode) => {
  const filteredCodes = codes.filter(code => code !== correctCode); //remove the correct country for when we get random countries
  let choices = [await getRandomCountry(filteredCodes), await getRandomCountry(filteredCodes), await getRandomCountry(filteredCodes), await getCountryData(correctCode)]


  return choices.map(choice => ({
    capital: choice.capital,
    correct: choice.alpha2Code === correctCode,
  }));
}

const getRandomQuestion = async () => {
  const { name: country, alpha2Code: code } = await getRandomCountry(codes);
  const choices = await getRandomChoices(code);

  return {
    question: `What is the capital of ${country}?`,
    choices: choices,
    correct: indexOfCallback(choices, (choice) => choice.correct)
  }
}

export const getRandomQuestions = async (numQuestions) => {
  let questions = [];
  for(let i = 0; i < numQuestions; i++) {
    questions.push(await getRandomQuestion());
  }
  return questions;
}