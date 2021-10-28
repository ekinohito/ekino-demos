import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../src/components/Header";
import {Button, Input, Typography} from "@mui/material";
import {useCalculator} from "../src/hooks/useCalculator";

const Calculator: NextPage = () => {
    const {input, setInput, compute, result} = useCalculator()
    return (
        <>
            <Head>
                <title>Calculator</title>
                <meta name="description" content="Calculator written by me"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Input
                value={ input }
                onChange={ (event) => setInput(event.target.value) }/>

            <Button onClick={ compute }>Compute</Button>
            <Typography>{ result }</Typography>
        </>
    )
}

export default Calculator
