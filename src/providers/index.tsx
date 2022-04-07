import { ReactNode } from 'react'
import { ExampleProvider } from './example'
import { NotificationProvider } from './notification'
import { QueryProvider } from './query'

type AppProvidersProps = { children: ReactNode }

function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <ExampleProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </ExampleProvider>
    </QueryProvider>
  )
}

export default AppProviders
