import { useState } from 'react'
import cards from './data/cards'
import Cards from './components/Cards'
import './App.css'
import InputBox from './components/InputBox'

function getRandomColor() {
    const r = Math.floor(Math.random() * 100) + 150;
    const g = Math.floor(Math.random() * 100) + 150;
    const b = Math.floor(Math.random() * 100) + 150;
    return `rgba(${r}, ${g}, ${b}, 0.92)`;
}

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardColor, setCardColor] = useState(getRandomColor());

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
    setCardColor(getRandomColor());
  };
  
  return (
    <>
      <div>

        <h1>All About  Penguins</h1>
        <h2>Think you know about penguins? Test your knowledge!</h2>
        <h3>Number of cards: {cards.length}</h3>

        <Cards
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
          isFlipped={isFlipped}
          onClick={handleFlip}
          backgroundColor={cardColor}
        />
        <div>
          <p className="guess-text">Guess the answer here: {<InputBox answer={cards[currentCardIndex].answer} />}</p>
        </div>
        <button onClick={handleNext}>-&gt;</button>

      </div>
    </>
  )
}

export default App
