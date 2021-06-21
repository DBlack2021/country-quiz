import React, { useState, useEffect } from 'react'
import { getRandomQuestions } from '../utils';
import Question from './Question'

export default function Game({ numQuestions }) {

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const questions = getRandomQuestions(numQuestions);

  console.log(questions);
  
  return (
    <div>
      <Question questionData={questions[currentQ]} />
      <button disabled={currentQ >= numQuestions - 1} onClick={() => setCurrentQ(currentQ+1)}>Next</button>
    </div>
  )
}
