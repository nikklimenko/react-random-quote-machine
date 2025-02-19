import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './utils/quotes'

function App() {
	const [currentQuote, setCurrentQuote] = useState(quotes[0].text)
	const [currentAuthor, setCurrentAuthor] = useState(quotes[0].author)

	const onNewQuote = () => {
		let newIndex
		do {
			newIndex = Math.floor(Math.random() * quotes.length)
		} while (quotes[newIndex].text === currentQuote)

		setCurrentQuote(quotes[newIndex].text)
		setCurrentAuthor(quotes[newIndex].author)
	}

	return (
		<div>
			<QuoteBox
				currentQuote={currentQuote}
				currentAuthor={currentAuthor}
				onNewQuote={onNewQuote}
			/>
		</div>
	)
}

export default App
