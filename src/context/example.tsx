import { createContext, useContext } from 'react'

type TExample = {
  name: string
}

type TExampleContextValue = {
  data: TExample
  functionExample(data: TExample): void
}

function noop() {}

const ExampleContext = createContext<TExampleContextValue>({
  data: {} as TExample,
  functionExample: noop
})

export function useExample() {
  return useContext(ExampleContext)
}

export default ExampleContext
