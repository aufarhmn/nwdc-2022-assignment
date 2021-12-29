import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import react from '../assets/Images/react-native.png'
import clang from '../assets/Images/clang.png'
import cpp from '../assets/Images/cpp.png'
import html from '../assets/Images/html.png'
import css from '../assets/Images/css.png'
import python from '../assets/Images/python.png'
import node from '../assets/Images/node.png'
import git from '../assets/Images/git.png'
import express from '../assets/Images/express.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const MySkills = () => {
    return (
    <ThemeProvider theme={lightTheme}>
    <Box>
    <SocialIcons theme='light'/>
    <PowerButton />
    <ParticleComponent theme='light' />
        <img src={clang} alt="clang" width="100px" />
        <img src={cpp} alt="cpp" width="100px" />
        <img src={react} alt="react" width="150px" />
        <img src={html} alt="html" width="120px" />
        <img src={css} alt="css" width="120px" />
        <img src={python} alt="python" width="120px" />
        <img src={node} alt="node" width="130px" />
        <img src={git} alt="git" width="110px" />
        <img src={express} alt="express" width="170px" />
        
            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>
        </ThemeProvider>
    )
}

export default MySkills