import React, { useState } from 'react'
import QuestionOptions from './QuestionOptions';

export default function Question({ questionData }) {
  const { question, choices, correct } = questionData;

  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h2>{question}</h2>
      <QuestionOptions options={choices} correct={correct} />
    </div>
  )
}
