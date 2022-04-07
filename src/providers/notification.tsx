import { Snackbar } from 'click-management-components'
import { NotificationContext } from 'context/notification'
import { useMemo, useState, ReactNode } from 'react'
import { getErrorMessage } from 'utils/error'

type NotificationProviderProps = {
  children: ReactNode
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [snackbar, setSnackbar] = useState({})
  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false })
  }
  const notification = (severity: any, message: string) => {
    setSnackbar({ severity, message, open: true })
  }
  const value = useMemo(
    () => ({
      success: (message: string) =>
        notification('success', message || 'Operação realizada com sucesso!'),
      error: (message: string) =>
        notification('error', getErrorMessage(message)),
      warning: (message: string) => notification('warning', message),
      info: (message: string) => notification('info', message)
    }),
    []
  )

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <Snackbar {...snackbar} onClose={handleClose} />
    </NotificationContext.Provider>
  )
}
