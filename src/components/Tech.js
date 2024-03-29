import React from 'react'
import { motion } from 'framer-motion'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import react from '../assets/Images/react-native.png'
import framer from '../assets/Images/framer.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main =  styled.div`
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
`

const Tech = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
        <Box>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <ParticleComponent theme='dark' />   
        <Main>
          <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
              <img src={react} alt="react" width="200px" />
          </motion.div>
          <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
              <img src={framer} alt="framer" width="300px" />
            </motion.div>
        </Main>
        <BigTitle text="TECH STACK" top="10%" left="5%" />
        </Box>
        </ThemeProvider>
    )
}

export default Tech