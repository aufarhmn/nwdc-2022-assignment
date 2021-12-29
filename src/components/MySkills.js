import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'

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
        
            <BigTitle text="EXPERIENCE" top="80%" right="30%" />

        </Box>
        </ThemeProvider>
    )
}

export default MySkills