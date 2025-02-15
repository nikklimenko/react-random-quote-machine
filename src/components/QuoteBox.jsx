import { FaQuoteLeft } from 'react-icons/fa'

const QuoteBox = () => {
	return (
		<div className='w-2xl min-h-48 mx-auto bg-amber-50 p-12' id='quote-box'>
			<div className='text-3xl mr-2 text-orange-600'>
				<FaQuoteLeft className='text-3xl mr-2 text-orange-600 inline-block align-top' />
				The two most important days in your life are the day you are born and
				the day you find out why.
			</div>
		</div>
	)
}

export default QuoteBox
