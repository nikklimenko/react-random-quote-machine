import PropTypes from 'prop-types'
import { PiTumblrLogoThin } from 'react-icons/pi'
import { RiTwitterXLine } from 'react-icons/ri'

function QuoteActions({ onNewQuote, currentQuote, currentAuthor, color }) {
	const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
		`"${currentQuote}" - ${currentAuthor}`
	)}`

	const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
		currentAuthor
	)}&content=${encodeURIComponent(
		currentQuote
	)}&section=content&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`

	return (
		<div
			className='flex flex-col-reverse sm:flex-row justify-between sm:items-center'
			id='social-actions'
		>
			<div className='flex justify-start space-x-4 w-full sm:w-auto sm:order-first'>
				<a
					href={tweetUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='h-10 w-10 flex items-center justify-center transition-all duration-500 transform hover:opacity-90'
					id='tweet-quote'
					style={{ backgroundColor: color }}
				>
					<RiTwitterXLine className='text-white text-2xl' />
				</a>
				<a
					href={tumblrUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='h-10 w-10 flex items-center justify-center transition-all duration-500 transform hover:opacity-90'
					id='tumblr-quote'
					style={{ backgroundColor: color }}
				>
					<PiTumblrLogoThin className='text-white text-2xl' />
				</a>
			</div>

			<button
				onClick={onNewQuote}
				className='text-white px-3 py-3 rounded cursor-pointer w-full sm:w-auto transition-all duration-500 transform hover:opacity-90 mb-4 sm:mb-0 sm:order-last'
				id='new-quote'
				style={{ backgroundColor: color }}
			>
				New Quote
			</button>
		</div>
	)
}

QuoteActions.propTypes = {
	onNewQuote: PropTypes.func.isRequired,
	currentQuote: PropTypes.string.isRequired,
	currentAuthor: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
}

export default QuoteActions
