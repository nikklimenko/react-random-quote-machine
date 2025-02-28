import './App.css'
import QuoteBox from './components/QuoteBox'
import { useRandomQuote } from './utils/useRandomQuote'

function App() {
	const { data, isLoading, isError } = useRandomQuote()

	const onNewQuote = () => {}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error fetching quotes</div>
	}

	return (
		<div>
			<QuoteBox
				currentQuote={data[0].quote}
				currentAuthor={data[0].author}
				onNewQuote={onNewQuote}
			/>
		</div>
	)
}

export default App
