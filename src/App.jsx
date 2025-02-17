import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './utils/quotes'

function App() {
	// const [count, setCount] = useState(0)
	const [currentQuote, setCurrentQuote] = useState(quotes[0].text)
	const [currentAuthor, setCurrentAuthor] = useState(quotes[0].author)

	const onNewQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length)
		setCurrentQuote(quotes[randomIndex].text)
		setCurrentAuthor(quotes[randomIndex].author)
	}

	return (
		<>
			<QuoteBox
				currentQuote={currentQuote}
				currentAuthor={currentAuthor}
				onNewQuote={onNewQuote}
			/>
		</>
	)
}

export default App
