import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import Gamaforce from '../assets/Images/gamaforce.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
display: flex;
flex-direction: column;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
`

const Description = styled.div`
color: ${props => props.theme.text};
display: flex;
justify-content: center;
text-align: center;
align-items: center;
font-size: calc(0.6em + 1vw);
`

const MySkills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
        <Box>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light' />
        <Main>
        <Title>
            <img src={Gamaforce} alt="Gamaforce" width="230px" />
        </Title>
        <Description>
        <br />
        Software Programmer 
        <br />
        at GAMAFORCE UGM
        <br />
        2021 - 2023
        </Description>
        </Main>
            <BigTitle text="EXPERIENCE" top="80%" right="30%" />
        </Box>
        </ThemeProvider>
    )
}

export default MySkills