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
  return questions;
}