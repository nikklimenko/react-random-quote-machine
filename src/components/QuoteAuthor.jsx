import PropTypes from 'prop-types'

function QuoteAuthor({ currentAuthor, color }) {
	return (
		<div className='text-right mt-3 mb-5' id='quote-author'>
			<span style={{ color: color }}> - {currentAuthor}</span>
		</div>
	)
}

QuoteAuthor.propTypes = {
	currentAuthor: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}

export default QuoteAuthor
