import { Grid, Typography, InputBase, Container, Button, Link } from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { padding } from '@mui/system';
import * as React from 'react';
import RecentProjects from '../components/RecentProjects';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        marginLeft: 0,
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function ComplexGrid() {

    const theme = useTheme();

    return (
        <>
            <header style={{ backgroundColor: "#233044", width: "100vw", height: "70vh" }} fontFamily={'roboto'}>
                <Container>
                    <Grid container spacing={8} style={{ paddingTop: "10vh", paddingBottom: "40px" }}>
                        <Grid item>
                            <Typography variant='h1' fontWeight={600} color={"text.primary"} fontSize={54} >
                                Rejoins une équipe et <br />
                                participe à des projets
                            </Typography>
                            <div style={{
                                marginTop: 20,
                                marginBottom: 20,
                            }}>
                                <Typography variant="p" fontSize={24} color={"text.secondary"} fontFamily={'roboto'} fontWeight={200} > Quel genre de projet recherches-tu ?</Typography>
                            </div>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Grid item>
                                <Button variant="contained" color="secondary" style={{ color: "black" }}>Trouver un projet</Button>
                                <Link href="/" color={"text.link"} underline="hover" sx={{ ml: 3 }} fontSize={18} fontFamily={'roboto'}>
                                    ou créez le votre !</Link>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <img style={{
                                width: 500,
                                borderRadius: 25
                            }} alt="projet d'équipe" src="https://images.unsplash.com/photo-1630090896228-88e5ea707294"></img>
                        </Grid>
                    </Grid>
                </Container>
            </header>
            <Container style={{ paddingTop: "5vh", paddingBottom: "40px" }} backgroundColor={theme.palette.primary.darker}>
                <RecentProjects></RecentProjects>
            </Container>
        </>
    );
}
