import PropTypes from 'prop-types'
import { GridLoader } from 'react-spinners'
import QuoteActions from './QuoteActions'
import QuoteAuthor from './QuoteAuthor'
import QuoteText from './QuoteText'

// eslint-disable-next-line react/prop-types
const QuoteBox = ({ onNewQuote, currentQuote, currentAuthor, isFetching }) => {
	if (isFetching) {
		return (
			<div className='w-2xl min-h-48 mx-auto bg-amber-50 p-12' id='quote-box'>
				<GridLoader color='red' size={30} />
			</div>
		)
	}

	return (
		<div className='w-2xl min-h-48 mx-auto bg-amber-50 p-12' id='quote-box'>
			<QuoteText text={currentQuote} />
			<QuoteAuthor currentAuthor={currentAuthor} />
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
