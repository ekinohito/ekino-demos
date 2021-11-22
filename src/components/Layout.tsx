import React from 'react'
import Header from "./Header";
import {Container, Divider} from "@mui/material";

export default function Layout(props: { children: React.ReactElement }) {
    return <>
        <Header links={[
            { href: "/calculator", text: "calculator" },
            { href: "/handwriting", text: "handwriting" },
            { href: "/camera", text: "camera" },
            { href: "/", text: "everything else idk" }
        ]}/>
        <Container>
            { props.children }
        </Container>
    </>
}