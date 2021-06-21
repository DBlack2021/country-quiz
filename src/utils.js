export const TestQuestion = {
  question: "Which of the following is the phone code of Cuba?",
  choices: [1, 4, 53, 6],
  correct: 2,
}

export const getRandomQuestions = (numQuestions) => {
  return Array.from(new Array(parseInt(numQuestions)).fill(TestQuestion));
}