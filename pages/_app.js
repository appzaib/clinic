import Footer from '../components/Footer'
import '@/styles/globals.css'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {


  return (

    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
