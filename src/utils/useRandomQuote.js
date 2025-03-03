import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getData = async () => {
	return await axios.get('https://api.api-ninjas.com/v1/quotes', {
		headers: {
			'X-Api-Key': import.meta.env.VITE_API_KEY,
		},
	})
}

export function useRandomQuote() {
	const { data, isLoading, isSuccess, isError, isFetching } = useQuery({
		queryKey: ['quote'],
		queryFn: getData,
		select: data => data.data,
	})

	return { data, isLoading, isSuccess, isError, isFetching }
}
