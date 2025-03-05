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
		return (
			<div className='min-h-screen flex items-center justify-center text-white text-lg'>
				Loading...
			</div>
		)
	}

	if (isError) {
		return (
			<div className='min-h-screen flex items-center justify-center text-red-500 text-lg'>
				Error fetching quotes
			</div>
		)
	}

	return (
		<div className='mt-4 min-h-screen flex flex-col items-center justify-center p-4'>
			<QuoteBox
				currentQuote={data[0].quote}
				currentAuthor={data[0].author}
				onNewQuote={onNewQuote}
				isFetching={isFetching}
				color={color}
			/>
			<QuoteFooterCopyright className='mt-4 text-sm text-gray-400' />
		</div>
	)
}

export default App
