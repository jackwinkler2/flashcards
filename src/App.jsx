import { useState } from 'react'
import cards from './data/cards'
import Cards from './components/Cards'
import './App.css'
import InputBox from './components/InputBox'

function getRandomColor() {
    const r = Math.floor(Math.random() * 100) + 150
    const g = Math.floor(Math.random() * 100) + 150
    const b = Math.floor(Math.random() * 100) + 150
    return `rgba(${r}, ${g}, ${b}, 0.92)`
}

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardColor, setCardColor] = useState(getRandomColor())
  const [resetCounter, setResetCounter] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  const handleGuess = (isCorrect) => {
    if (isCorrect) {
      const newStreak = currentStreak + 1
      setCurrentStreak(newStreak)
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak)
      }
    } else {
      setCurrentStreak(0)
    }
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
      setCardColor(getRandomColor())
      setResetCounter(prev => prev + 1)
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
      setCardColor(getRandomColor())
      setResetCounter(prev => prev + 1)
    }
    else{

    }
  }

  return (
    <>
      <div>

        <h1>All About  Penguins</h1>
        <h2>Think you know about penguins? Test your knowledge!</h2>
        <h3>Number of cards: {cards.length}</h3>
        <h3>Current Streak: {currentStreak} Longest Streak: {longestStreak}</h3>

        <Cards
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
          isFlipped={isFlipped}
          onClick={handleFlip}
          backgroundColor={cardColor}
        />
        <div>
          <p className="guess-text">Guess the answer here: {<InputBox answer={cards[currentCardIndex].answer} 
          borderStatus={resetCounter} onGuess={handleGuess}/>}</p>
        </div>
        <button onClick={handlePrev} disabled={currentCardIndex === 0}
        className={`nav-button ${currentCardIndex === 0 ? 'disabled-button' : ''}`}
        >&lt;-</button>
        <button onClick={handleNext} disabled={currentCardIndex === cards.length - 1}
        className={`nav-button ${currentCardIndex === cards.length-1 ? 'disabled-button' : ''}`}
        >-&gt;</button>

      </div>
    </>
  )
}

export default App
