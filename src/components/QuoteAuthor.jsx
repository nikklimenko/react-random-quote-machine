import PropTypes from 'prop-types'

function QuoteAuthor({ currentAuthor, color }) {
	return (
		<div className='text-right mt-4 sm:mt-3 mb-6 sm:mb-5' id='quote-author'>
			<span style={{ color: color }}> - {currentAuthor}</span>
		</div>
	)
}

QuoteAuthor.propTypes = {
	currentAuthor: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}

export default QuoteAuthor
