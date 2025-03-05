import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const QuoteFooterCopyright = () => (
	<div className='mt-6 text-white'>
		<div className='text-center sm:flex sm:items-center sm:justify-between'>
			<p className='sm:block sm:mr-4'>
				© {new Date().getFullYear()} Created by
			</p>
			<p className='font-bold sm:block'>{'Mykola Klymenko'}</p>
		</div>

		<div className='flex justify-center gap-4 mt-4'>
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
		</div>
	</div>
)

export default QuoteFooterCopyright
