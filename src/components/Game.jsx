import React, { useState, useEffect } from 'react'
import { getRandomQuestions } from '../utils';
import Question from './Question'

export default function Game({ numQuestions }) {

  const [currentQ, setCurrentQ] = useState(0);
  const questions = getRandomQuestions(numQuestions);
  
  const checkAnswers = () => {
    console.log("poop!");
  }

  return (
    <div>
      <Question questionData={questions[currentQ]} />
      { currentQ < numQuestions - 1 ? 
        <button onClick={() => setCurrentQ(currentQ+1)}>Next</button>
        :
        <button onClick={checkAnswers}>Submit</button>
      }
    </div>
  )
}
