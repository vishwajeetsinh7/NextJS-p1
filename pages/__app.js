import Layout from '../components/layout/layout'
import '../styles/globals.css'
import App from 'next/app'

// function MyApp({Component, pageProps}) { 
//     return(
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
//     )
// }

// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }

// export default MyApp

 
export default function MyApp({ Component, pageProps, example }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
      <p>Data: {example}</p>
    </Layout>
    </>
  )
}
 
MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}