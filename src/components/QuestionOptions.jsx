import React from 'react'

export default function QuestionOptions({ options, setSelected }) {

  const handleChange = (event) => {
    setSelected(event.target.value);
  }

  return (
    <div>
      <form>
        {options.map(option => (
          <div>
            <input type="radio" name="option" onChange={handleChange} key={options.indexOf(option)} value={options.indexOf(option)} /> {option}
          </div>
        ))}
      </form>
    </div>
  )
}
