import { FaQuoteLeft } from 'react-icons/fa'

function QuoteText() {
	return (
		<div className='text-3xl mr-2 text-orange-600' id='quote-text'>
			<FaQuoteLeft className='text-3xl mr-2 text-orange-600 inline-block align-top' />
			The two most important days in your life are the day you are born and the
			day you find out why.
		</div>
	)
}

export default QuoteText
