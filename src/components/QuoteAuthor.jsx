import PropTypes from 'prop-types'

function QuoteAuthor({ currentAuthor }) {
	return (
		<div className='text-right mt-3 mb-5' id='quote-author'>
			<span className='text-orange-600'> - {currentAuthor}</span>
		</div>
	)
}

QuoteAuthor.propTypes = {
	currentAuthor: PropTypes.string.isRequired,
}

export default QuoteAuthor
