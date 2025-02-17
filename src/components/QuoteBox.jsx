import QuoteAuthor from './QuoteAuthor'
import QuoteText from './QuoteText'

const QuoteBox = () => {
	return (
		<div className='w-2xl min-h-48 mx-auto bg-amber-50 p-12' id='quote-box'>
			<QuoteText />
			<QuoteAuthor />
		</div>
	)
}

export default QuoteBox
