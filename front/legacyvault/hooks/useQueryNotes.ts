import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { InputProps } from '../types'
import { useError } from '../hooks/useError'

export const useQueryNotes = () => {
  const { switchErrorHandling } = useError()
  const getNotes = async () => {
    const { data } = await axios.get<InputProps[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/notes`,
      { withCredentials: true }
    )
    return data
  }
  return useQuery<InputProps[], Error>({
    queryKey: ['notes'],
    queryFn: getNotes,
    staleTime: Infinity,
    onError: (err: any) => {
      if (err.response.data.message) {
        switchErrorHandling(err.response.data.message)
      } else {
        switchErrorHandling(err.response.data)
      }
    },
  })
}
