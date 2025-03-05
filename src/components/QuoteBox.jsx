import PropTypes from 'prop-types'
import { GridLoader } from 'react-spinners'
import QuoteActions from './QuoteActions'
import QuoteAuthor from './QuoteAuthor'
import QuoteText from './QuoteText'

const QuoteBox = ({
	onNewQuote,
	currentQuote,
	currentAuthor,
	isFetching,
	color,
}) => {
	return (
		<div
			className='w-full sm:w-2xl min-h-48 min-w-72 mx-auto bg-amber-50 p-6 md:p-12 rounded-lg shadow-lg text-center transition-all mt-4 sm:mt-0'
			id='quote-box'
		>
			{isFetching ? (
				<GridLoader
					className='m-5 transition-all duration-500 transform'
					color={color}
					size={20}
				/>
			) : (
				<div>
					<QuoteText text={currentQuote} color={color} />
					<QuoteAuthor currentAuthor={currentAuthor} color={color} />
				</div>
			)}
			<QuoteActions
				onNewQuote={onNewQuote}
				currentQuote={currentQuote}
				currentAuthor={currentAuthor}
				color={color}
			/>
		</div>
	)
}

QuoteBox.propTypes = {
	onNewQuote: PropTypes.func.isRequired,
	currentQuote: PropTypes.string.isRequired,
	currentAuthor: PropTypes.string.isRequired,
	isFetching: PropTypes.bool,
	color: PropTypes.string.isRequired,
}

export default QuoteBox
