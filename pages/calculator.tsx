import type {NextPage} from 'next'
import Head from 'next/head'
import {Button, Box, TextField, Typography, Chip, Grow, Paper} from "@mui/material";
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
            <Box display="flex" marginTop={ 4 } flexDirection="row" alignItems="center" flexWrap="wrap">
                <TextField
                    value={ input }
                    sx={{ marginRight: 4, flexGrow: 1 }}
                    label="expression"
                    type="text"
                    onChange={ (event) => setInput(event.target.value) }/>
                <Button onClick={ compute }>Compute</Button>
            </Box>
            <Grow in={ !!result }>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} marginTop={ 2 }>
                    <Typography variant={"h5"} sx={{ marginRight: 1 }}>Result:</Typography>
                    <Chip label={ result } sx={{ fontSize: 18 }}/>
                </Box>
            </Grow>
        </>
    )
}

export default Calculator
