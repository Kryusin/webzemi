import axios from 'axios'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { InputProps, AddProps } from '@/types'
import useStoreNote from '@/store/note'
import { useError } from '../hooks/useError'
import { useRouter } from 'next/navigation'
import useStoreUser from "@/store/user"

export const useMutateNote = () => {
  const currentUser = useStoreUser((state) => state.currentUser)
  const queryClient = useQueryClient()
  const { switchErrorHandling } = useError()
  const resetEditedNote = useStoreNote((state) => state.resetEditedNote)
  const router = useRouter()

  const createNoteMutation = useMutation(
    async (note: AddProps) =>
      await axios.post<AddProps>(`${process.env.NEXT_PUBLIC_API_URL}/notes`, note),
    {
      onSuccess: (res) => {
        const previousNotes = queryClient.getQueryData<InputProps[]>(['notes'])
        if (previousNotes) {
          queryClient.setQueryData(['notes'], [...previousNotes, res.data])
        }
        resetEditedNote()
        console.log(currentUser)
        router.push(`/${currentUser.name}`)
      },
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )
  const updateNoteMutation = useMutation(
    (note: Omit<InputProps, 'created_at' | 'updated_at'>) =>
      axios.put<InputProps>(`${process.env.NEXT_PUBLIC_API_URL}/notes/${note.id}`, {
        user_id: note.user_id,
        error_title: note.error_title,
        language: note.language,
        error_details: note.error_details,
        before_code: note.before_code,
        error_reason: note.error_reason,
        solution_details: note.solution_details,
        after_code: note.after_code
      }),
    {
      onSuccess: (res, variables) => {
        const previousNotes = queryClient.getQueryData<InputProps[]>(['notes'])
        if (previousNotes) {
          queryClient.setQueryData<InputProps[]>(
            ['notes'],
            previousNotes.map((note) =>
              note.id === variables.id ? res.data : note
            )
          )
        }
        resetEditedNote()
        console.log(currentUser)
        router.push(`/${currentUser.name}`)
      },
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )
  const deleteNoteMutation = useMutation(
    (id: number) =>
      axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`),
    {
      onSuccess: (_, variables) => {
        const previousNotes = queryClient.getQueryData<InputProps[]>(['notes'])
        if (previousNotes) {
          queryClient.setQueryData<InputProps[]>(
            ['notes'],
            previousNotes.filter((note) => note.id !== variables)
          )
        }
        resetEditedNote()
      },
      onError: (err: any) => {
        if (err.response.data.message) {
          switchErrorHandling(err.response.data.message)
        } else {
          switchErrorHandling(err.response.data)
        }
      },
    }
  )
  return {
    createNoteMutation,
    updateNoteMutation,
    deleteNoteMutation,
  }
}
