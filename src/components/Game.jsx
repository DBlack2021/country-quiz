import React, { useState, useEffect } from 'react'
import { TestQuestion } from '../TestData/TestData'

export default function Game({ numQuestions }) {

  const [currentQ, setCurrentQ] = useState(0)
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const qArr = new Array(5).fill(TestQuestion);
    setQuestions(Array.from(qArr));
    //generate questions?
    return () => {
      //unmounting
    }

  }, [])

  return (
    <div>
      {questions.map(question => (
        <p key={question.question}>{question.question}</p>
      ))}
    </div>
  )
}
