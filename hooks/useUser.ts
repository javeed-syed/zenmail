import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

function useUser (id) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)
 
  return {
    user: data,
    isLoading,
    isError: error
  }
}