import React from 'react'
import {AppBar, Link, Toolbar, Typography} from "@mui/material";

export default function Header() {
    return <>
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h4" flexGrow={ 1 }>Ekino Demos</Typography>
                <Link color="primary.contrastText" sx={{ ml: 2, cursor: "pointer" }}>calculator</Link>
                <Link color="grey.400" sx={{ ml: 2, cursor: "pointer"  }}>everything else idk</Link>
            </Toolbar>
        </AppBar>
    </>
}