import { useState } from 'react'
import cards from './data/cards'
import Cards from './components/Cards';
import './App.css'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    let index = -1

    // choose a random index that is not the current card
    do {
      index = Math.floor(Math.random() * cards.length);
    }while (index == currentCardIndex && cards.length > 1);

    setCurrentCardIndex(index);
    setIsFlipped(false);
  };
  
  return (
    <>
      <div>

        <h1>Become a Data Scientist</h1>
        <h2>Want to become a data scientist? Let's see what you know!</h2>
        <h3>Number of cards:</h3>

        <Cards
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
          isFlipped={isFlipped}
          onClick={handleFlip}
        />

        <button onClick={handleNext}>-&gt;</button>

      </div>
    </>
  )
}

export default App
