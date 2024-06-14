import axios from 'axios'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { InputProps, Task } from '@/types'
import useStoreNote from '@/store/note'
import { useError } from '../hooks/useError'

export const useMutateNote = () => {
  const queryClient = useQueryClient()
  const { switchErrorHandling } = useError()
  const resetEditedNote = useStoreNote((state) => state.resetEditedNote)

  const createNoteMutation = useMutation(
    (note: Omit<InputProps, 'id' | 'created_at' | 'updated_at'>) =>
      axios.post<InputProps>(`${process.env.REACT_APP_API_URL}/notes`, note),
    {
      onSuccess: (res) => {
        const previousNotes = queryClient.getQueryData<InputProps[]>(['notes'])
        if (previousNotes) {
          queryClient.setQueryData(['notes'], [...previousNotes, res.data])
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
  const updateNoteMutation = useMutation(
    (note: Omit<InputProps, 'created_at' | 'updated_at'>) =>
      axios.put<InputProps>(`${process.env.REACT_APP_API_URL}/notes/${note.id}`, {
        user_id: note.user_id,
        ErrorTitle: note.ErrorTitle,
        language: note.language,
        ErrorDetails: note.ErrorDetails,
        BeforeCode: note.BeforeCode,
        ErrorReason: note.ErrorReason,
        SolutionDetails: note.SolutionDetails,
        AfterCode: note.AfterCode
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
      axios.delete(`${process.env.REACT_APP_API_URL}/notes/${id}`),
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