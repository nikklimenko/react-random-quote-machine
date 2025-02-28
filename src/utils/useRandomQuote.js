import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'

const getData = async () => {
	return await axios.get('https://api.api-ninjas.com/v1/quotes', {
		headers: {
			'X-Api-Key': import.meta.env.VITE_API_KEY,
		},
	})
}

export function useRandomQuote() {
	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: ['quote'],
		queryFn: getData,
		select: data => data.data,
	})

	useEffect(() => {
		if (isSuccess) console.log('Data fetched successfully')
	}, [isSuccess, data])

	useEffect(() => {
		if (isError) console.log('Error fetching data')
	}, [isError, data])

	return { data, isLoading, isSuccess, isError }
}
