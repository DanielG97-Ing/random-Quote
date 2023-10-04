import { useState } from 'react'
import './App.css'
import spaceCuriosities from './Db/spaceCuriosities.json'
import { getRandomElement, imageStarts } from './utils/random'
import QuoteCard from './components/QuoteCard'

function App() {
  const [quote, setQuote] = useState(getRandomElement(spaceCuriosities))
  const [currentBg, setCurrentBg] = useState(getRandomElement(imageStarts))
  // console.log(currentBg)

  // console.log(getRandomElement(spaceCuriosities))
  return (
    <main className={`app ${currentBg}`} >
     <QuoteCard quote={quote} setQuote={setQuote} setCurrentBg={setCurrentBg}/> 
    </main>
  )
}

export default App
