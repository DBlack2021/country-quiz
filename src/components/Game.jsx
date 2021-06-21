import React, { useState, useEffect } from 'react'
import QuestionOptions from './QuestionOptions';

export default function Game({ questions }) {

  const [currentQ, setCurrentQ] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [selected, setSelected] = useState(0);
  const correctAnswers = questions.map(question => question.correct); //an array of the indecies of correct answers   

  const onNext = () => {
    //The issue is that it is running setGuesses last
    setGuesses([...guesses, selected]); //add the guess
    if(currentQ < questions.length - 1) setCurrentQ(currentQ + 1); //move forward
    if(currentQ >= questions.length - 1) checkAnswers(); //if button was submit, check answers
  }

  const checkAnswers = () => {
    console.log(guesses);
    let score = 0;
    for(let i = 0; i < questions.length; i++) {
      if(guesses[i] === correctAnswers[i]) score++;
    }
    return score;
  }

  return (
    <div>
      <h2>{questions[currentQ].question}</h2>
      <QuestionOptions options={questions[currentQ].choices} setSelected={setSelected}/>
      
      { currentQ < questions.length - 1 ? 
        <button onClick={onNext}>Next</button>
        :
        <button onClick={onNext}>Submit</button>
      }
    </div>    
  )
}
