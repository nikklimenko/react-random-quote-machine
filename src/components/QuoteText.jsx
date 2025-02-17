import PropTypes from 'prop-types'
import { FaQuoteLeft } from 'react-icons/fa'

function QuoteText({ text }) {
	return (
		<div className='text-3xl mr-2 text-orange-600' id='quote-text'>
			<FaQuoteLeft className='text-3xl mr-2 text-orange-600 inline-block align-top' />
			{text}
		</div>
	)
}

QuoteText.propTypes = {
	text: PropTypes.string.isRequired,
}

export default QuoteText
