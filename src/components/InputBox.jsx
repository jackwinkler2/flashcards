import { useState } from 'react'
import './InputBox.css'

function InputBox({answer}) {
  const [inputValue, setInputValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim().toLowerCase()
    setIsCorrect(trimmed === answer.toLowerCase())
  }

  let inputBorderClass = 'border-gray-400'
  if (isCorrect === true) {
    inputBorderClass = 'border-green-500'
  } else if (isCorrect === false) {
    inputBorderClass = 'border-red-500'
  }

  return (
    <form onSubmit={handleSubmit} className='input-form'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Place your answer here..."
        className={`input-box ${inputBorderClass}`}
      />
      <button
        type="submit"
        className="submit-button"
      >
        Submit Guess
      </button>
    </form>
  )
}

export default InputBox;