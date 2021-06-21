export const TestQuestion = {
  question: "Which of the following is the phone code of Cuba?",
  choices: [1, 4, 53, 6],
  correct: 2,
}

const getRandomQuestion = () => {
  return {
    question: Math.random().toString(36).substring(2),
    choices: [1, 4, 53, 6],
    correct: 2
  }
}

export const getRandomQuestions = (numQuestions) => {
  let questions = [];
  for(let i = 0; i < numQuestions; i++) {
    questions.push(getRandomQuestion());
  }
  console.log(questions);
  return questions;
}