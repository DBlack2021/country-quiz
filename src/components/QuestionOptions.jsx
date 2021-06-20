import React from 'react'

export default function QuestionOptions({ options, correct, setSelected }) {
  return (
    <div>
      {options.map(option => (
        <p key={options.indexOf(option)}>{option}</p>
      ))}
    </div>
  )
}
