import React, { useState, useEffect } from 'react'
import { TestQuestion } from '../TestData/TestData'
import Question from './Question'

export default function Game({ numQuestions }) {

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(Array.from(new Array(numQuestions).fill(TestQuestion)));
  }, [])
  
  return (
    <div>
      <Question questionData={questions[currentQ]} />
      <button onClick={() => setCurrentQ(currentQ+1)}>Next</button>
    </div>
  )
}
