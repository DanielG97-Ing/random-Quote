import { getRandomElement, imageStarts } from "../utils/random"
import spaceCuriosities from '../Db/spaceCuriosities.json'
import './QuoteCard.css'

const QuoteCard = ({quote, setQuote, setCurrentBg}) => {
    // console.log(quote)

    const handleChangeQuote = () => {
        setQuote(getRandomElement(spaceCuriosities))
        setCurrentBg(getRandomElement(imageStarts))
    }
  return (
    <section className="quoteCard">
        <h1 className="quoteCard__title">Infogalax</h1>
        <article className="quoteCard__container">

            <p className="quoteCard__phrase">{quote.phrase}</p>

            <button className="quoteCard__btn" onClick={handleChangeQuote}>
            <svg xmlns="http://www.w3.org/2000/svg" width="68" height="67" viewBox="0 0 68 67" fill="none">
  <g filter="url(#filter0_d_173_2057)">
    <path d="M34.2617 5C20.8215 5 9.88672 15.9359 9.88672 29.375C9.88672 42.8352 20.8016 53.75 34.2617 53.75C47.702 53.75 58.6367 42.8152 58.6367 29.375C58.6367 15.9137 47.723 5 34.2617 5ZM34.2617 41.6797C31.3402 41.6797 28.5383 40.5191 26.4725 38.4533C24.4067 36.3875 23.2461 33.5856 23.2461 30.6641C23.2461 27.7425 24.4067 24.9407 26.4725 22.8748C28.5383 20.809 31.3402 19.6484 34.2617 19.6484H34.7551L33.1016 17.9961C32.7939 17.6884 32.621 17.2711 32.621 16.8359C32.621 16.4008 32.7939 15.9835 33.1016 15.6758C33.4093 15.3681 33.8266 15.1952 34.2617 15.1952C34.6969 15.1952 35.1142 15.3681 35.4219 15.6758L40.1094 20.3633C40.2617 20.5156 40.3826 20.6965 40.4651 20.8956C40.5475 21.0946 40.59 21.308 40.59 21.5234C40.59 21.7389 40.5475 21.9523 40.4651 22.1513C40.3826 22.3504 40.2617 22.5312 40.1094 22.6836L35.4219 27.3711C35.1142 27.6788 34.6969 27.8516 34.2617 27.8516C33.8266 27.8516 33.4093 27.6788 33.1016 27.3711C32.7939 27.0634 32.621 26.6461 32.621 26.2109C32.621 25.7758 32.7939 25.3585 33.1016 25.0508L35.2109 22.9414C34.932 22.9297 34.6133 22.9297 34.2617 22.9297C32.732 22.9297 31.2366 23.3833 29.9647 24.2332C28.6928 25.083 27.7015 26.291 27.1161 27.7042C26.5307 29.1175 26.3775 30.6726 26.676 32.173C26.9744 33.6733 27.711 35.0514 28.7927 36.1331C29.8744 37.2148 31.2525 37.9514 32.7528 38.2498C34.2531 38.5483 35.8083 38.3951 37.2215 37.8097C38.6348 37.2243 39.8428 36.233 40.6926 34.9611C41.5425 33.6891 41.9961 32.1938 41.9961 30.6641C41.9961 30.2289 42.1689 29.8116 42.4766 29.504C42.7843 29.1963 43.2016 29.0234 43.6367 29.0234C44.0718 29.0234 44.4891 29.1963 44.7968 29.504C45.1045 29.8116 45.2773 30.2289 45.2773 30.6641C45.2739 33.5845 44.1123 36.3844 42.0472 38.4495C39.9821 40.5146 37.1822 41.6763 34.2617 41.6797Z" fill="white"/>
  </g>
  <defs>
    <filter id="filter0_d_173_2057" x="0.886719" y="0" width="66.75" height="66.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="4.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_173_2057"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_173_2057" result="shape"/>
    </filter>
  </defs>
</svg>
            </button>

        </article>

        <footer className="quoteCard__footer">
            Author: {quote.author}
        </footer>
    </section>
  )
}
export default QuoteCard