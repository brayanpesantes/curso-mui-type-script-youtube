import { AlertColor } from '@mui/material'
import { createContext, FC, useContext, useState } from 'react'
import { Notification } from '../components'

type ContextProps = {
  getError: (msg: string) => void
  getSuccess: (msg: string) => void
}
const NotificationContext = createContext<ContextProps | null>(null)

export const NotificationProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)

  const handleClose = () => {
    setOpen(false)
  }
  const getError = (msg: string) => {
    setSeverity('error')
    setOpen(true)
    setMessage(msg)
  }
  const getSuccess = (msg: string) => {
    setSeverity('success')
    setOpen(true)
    setMessage(msg)
  }
  const value = {
    getError,
    getSuccess,
  }
  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={message}
      />
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) throw new Error('No existe contexto')
  return context
}
