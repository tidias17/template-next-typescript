import { AxiosError } from 'axios'
import { createContext, useContext } from 'react'

export const NotificationContext = createContext({
  success(message?: string) {},
  error(message?: AxiosError | string) {},
  warning(message: string) {},
  info(message: string) {}
})

export function useNotification() {
  return useContext(NotificationContext)
}
