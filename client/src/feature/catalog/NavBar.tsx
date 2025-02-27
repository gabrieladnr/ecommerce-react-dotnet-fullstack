import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";


export default function NavBar() {
    const darkMode = false;
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <IconButton>
                    { darkMode ? <DarkMode/> : <LightMode/> }
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}