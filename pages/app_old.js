import { useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [pageTitle, setPageTitle] = useState('Next.js Test Project')

  const onChangeTitle = (title) => {
    setPageTitle(title)
  }

  return (
    <Layout pageTitle={pageTitle}>
      <Component { ...pageProps } />
    </Layout>
  )
}

export default MyApp
