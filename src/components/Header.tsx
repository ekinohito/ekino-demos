import React from 'react'
import {AppBar, Container, Link, Toolbar, Typography} from "@mui/material";
import NextLink from "next/link"
import {useRouter} from "next/router";
import Avatar from "./Avatar";

export default function Header(props: { links?: { href: string, text?: string }[] }) {
    const router = useRouter()
    return <>
        <AppBar position="sticky">
            <Container>
                <Toolbar>
                    <NextLink href="/">
                        <Typography variant="h4" flexGrow={ 1 }>
                            <span style={{ cursor: "pointer" }}>Ekino Demos</span>
                        </Typography>
                    </NextLink>
                    { props.links?.map(link => <NextLink key={ link.href } href={ link.href } passHref>
                        <Link color={(link.href === router.pathname)?"primary.contrastText":"grey.400"} sx={{ ml: 2, cursor: "pointer" }}>{ link.text }</Link>
                    </NextLink>) }
                    <Avatar/>
                </Toolbar>
            </Container>
        </AppBar>
    </>
}