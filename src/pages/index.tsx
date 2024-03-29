import type { NextPage } from 'next'
import { useQuery } from 'customHooks/query'
import { useExample } from 'context/example'
import Head from 'next/head'

const Home: NextPage = () => {
  const example = useExample()
  const setDataContext: any = (name: any) => {
    example.functionExample({ name })
  }
  const { data: test }: any = useQuery(['query-data-test'], `/api/test`)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1>Hello World</h1>
        {test && (
          <>
            <p onClick={() => setDataContext(test.name)}>{test.name}</p>
            {example.data.name && (
              <p>o nome selecionado foi: {example.data?.name}</p>
            )}
          </>
        )}
      </main>
    </>
  )
}

export default Home
