import React from 'react'

export default function StartMenu({ setStarted, setNumQuestions }) {

    const updateQuestions = (event) => {
      setNumQuestions(event.target.value);
    }

    return (
      <div>
          <h1>Welcome To The Country Quiz!</h1>
          <h3>How Many Questions Would You Like? (Choose between 1 and 20)</h3>
          <div>
              <input onChange={updateQuestions} placeholder="1" type="number" id="quantity" name="quantity" min="1" max="20" />
              <button onClick={() => setStarted(true)}>Start</button>
          </div>
      </div>
    )
}
