import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../src/components/Header";

const Calculator: NextPage = () => {
    return (
        <>
            <Head>
                <title>Calculator</title>
                <meta name="description" content="Calculator written by me"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
        </>
    )
}

export default Calculator
