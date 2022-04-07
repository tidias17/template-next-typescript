import { useCallback, useMemo, useState } from 'react'
import ExampleContext from 'context/example'

const ExampleProvider = ({ children }: any) => {
  const [data, setData] = useState({ name: '' })

  const functionExample = useCallback((data) => {
    setData(data)
  }, [])

  const providerValue = useMemo(
    () => ({
      data,
      functionExample
    }),
    [data, functionExample]
  )

  return (
    <ExampleContext.Provider value={providerValue}>
      {children}
    </ExampleContext.Provider>
  )
}

export { ExampleProvider }
