import PropTypes from 'prop-types'
import { FaQuoteLeft } from 'react-icons/fa'

function QuoteText({ text, color }) {
	return (
		<div
			className='text-3xl mr-2 transition-all duration-500 transform'
			id='quote-text'
			style={{ color: color }}
		>
			<FaQuoteLeft
				className='text-3xl mr-2 inline-block align-top'
				style={{ color: color }}
			/>
			{text}
		</div>
	)
}

QuoteText.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}

export default QuoteText
