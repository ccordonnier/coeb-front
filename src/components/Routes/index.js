import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import SignIn from '../../pages/Signin';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';


const Main = styled('section')(({ theme }) => ({
    backgroundColor: theme.palette.primary.darker,
    minHeight: '80vh',
    paddingTop: 40,
}));

const index = () => {
    return (
        <Router>
            <Navbar />
            <Main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/connexion" exact element={<SignIn />} />
                    <Route element={<Navigate to="/" />} />
                </Routes>
            </Main>
        </Router>
    );
};

export default index;