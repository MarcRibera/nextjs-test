import Head from 'next/head'

export default function Home({ pageProps }) {
  return (
    <div>
      <Head>
        <title> The NEXT project </title>
        <meta name="keywords" content="some, words for the seo" />
      </Head>
      <h1>Index page</h1>
    </div>
  )
}
