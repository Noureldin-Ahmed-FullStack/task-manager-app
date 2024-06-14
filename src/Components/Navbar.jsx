import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

export default function Navbar() {

    const pages = ['home', 'tasks', 'about', 'contact'];
    const location = useLocation();

    // Access the current path from the location object
    const currentPath = location.pathname;
    const [anchorElNav, setAnchorElNav] = useState(null);
    console.log(currentPath);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:hover': {
                                    color: 'inherit',
                                },
                            }}
                        >
                            task-manager-app
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page}
                                        sx={{
                                            backgroundColor: currentPath == '/' + page ? 'rgba(184, 184, 184, 0.315)' : '',
                                        }}
                                        onClick={handleCloseNavMenu}>
                                        <Typography
                                            component={Link}
                                            to={page}
                                            variant={currentPath == '/' + page ? 'outlined' : ''}
                                            sx={{
                                                color: "inherit",
                                                '&:hover': {
                                                    color: 'inherit',
                                                },
                                            }}
                                        >{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                '&:hover': {
                                    color: 'inherit',
                                },
                            }}
                        >
                            task-manager-app
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    component={Link}
                                    variant={currentPath == '/' + page ? 'outlined' : ''}
                                    to={`/${page}`}
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2, color: 'inherit', display: 'block', '&:hover': {
                                            color: 'inherit',
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Authentication">
                                <IconButton sx={{ p: 0 }}>
                                    <UserButton afterSignOutUrl="/sign-in" />
                                </IconButton>
                            </Tooltip>
                           
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
