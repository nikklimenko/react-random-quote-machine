import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const QuoteFooterCopyright = () => (
	<div className='mt-6 text-center text-white'>
		<p className='flex items-center justify-center gap-3'>
			© {new Date().getFullYear()} Created by <b>Mykola Klymenko</b>
			<a
				href='https://github.com/nikklimenko'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaGithub className='text-white hover:text-gray-300 text-2xl transition-all duration-300 transform' />
			</a>
			<a
				href='https://www.linkedin.com/in/mykola-klymenko-8309b6216/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaLinkedin className='text-white hover:text-gray-300 text-2xl transition-all duration-300 transform' />
			</a>
			<a
				href='https://www.instagram.com/mykola_frontend'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaInstagram className='text-white hover:text-gray-300 text-2xl transition-all duration-300 transform' />
			</a>
		</p>
	</div>
)

export default QuoteFooterCopyright
