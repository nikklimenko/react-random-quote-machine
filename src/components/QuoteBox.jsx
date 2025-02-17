import PropTypes from 'prop-types'
import QuoteActions from './QuoteActions'
import QuoteAuthor from './QuoteAuthor'
import QuoteText from './QuoteText'

const QuoteBox = ({ onNewQuote, currentQuote, currentAuthor }) => {
	return (
		<div className='w-2xl min-h-48 mx-auto bg-amber-50 p-12' id='quote-box'>
			<QuoteText />
			<QuoteAuthor />
			<QuoteActions
				onNewQuote={onNewQuote}
				currentQuote={currentQuote}
				currentAuthor={currentAuthor}
			/>
		</div>
	)
}

QuoteBox.propTypes = {
	onNewQuote: PropTypes.func.isRequired,
	currentQuote: PropTypes.string.isRequired,
	currentAuthor: PropTypes.string.isRequired,
}

export default QuoteBox
