import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Prueba FrontEnd</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta charset="utf-8" />
            <link rel="icon" href="/favicon.ico"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        <main>
           {children}
        </main>
        </>
    );
}

export default Layout;