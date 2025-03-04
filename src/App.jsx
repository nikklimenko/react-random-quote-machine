import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import QuoteFooterCopyright from './components/QuoteFooterCopyright'
import { getRandomColor } from './utils/colors'
import { useRandomQuote } from './utils/useRandomQuote'

function App() {
	const queryClient = useQueryClient()
	const [color, setColor] = useState(getRandomColor())
	const { data, isLoading, isError, isFetching } = useRandomQuote()

	const onNewQuote = () => {
		queryClient.invalidateQueries('quote')
		let newColor = getRandomColor()
		newColor === color ? (newColor = getRandomColor()) : setColor(newColor)
		document.body.style.backgroundColor = color
	}

	useEffect(() => {
		document.body.style.backgroundColor = color
	}, [color])

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
				isFetching={isFetching}
				color={color}
			/>
			<QuoteFooterCopyright />
		</div>
	)
}

export default App
