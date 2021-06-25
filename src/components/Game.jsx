import React, { useState, useEffect } from 'react'
import QuestionOptions from './QuestionOptions';
import { useNonInitialEffect } from '../hooks'
import { getRandomQuestions } from '../utils';

export default function Game({ numQuestions }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [selected, setSelected] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQ() {
      let qs = await getRandomQuestions(numQuestions)
      console.log(qs);
      setQuestions(qs)
    }
    getQ();
  }, [])

  const correctAnswers = questions.length > 0 ? questions.map(question => question.correct) : []; //an array of the indecies of correct answers   

  useNonInitialEffect(() => {
    if(currentQ < questions.length - 1) setCurrentQ(currentQ + 1); //move forward
    if(currentQ >= questions.length - 1) checkAnswers(); //if button was submit, check answers
  }, [guesses])

  const onNext = () => {
    setGuesses([...guesses, selected]); //add the guess
  }

  const checkAnswers = () => {
    let score = 0;
    for(let i = 0; i < questions.length; i++) {
      if(guesses[i] === correctAnswers[i]) score++;
    }
    return score;
  }

  return (
    <div>
      {
        questions.length > 0 ?
          <div>
            <h2>{questions[currentQ].question}</h2>
            <QuestionOptions options={questions[currentQ].choices} setSelected={setSelected}/>
          
            { currentQ < questions.length - 1 ? 
              <button onClick={onNext}>Next</button>
              :
              <button onClick={onNext}>Submit</button>
            }
          </div>
        :
          <h1>Loading Questions...</h1>
      }
      
    </div>    
  )
}
