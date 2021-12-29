import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import { Book, Networking } from '../components/AllSvgs'

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
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
text-align: center;
${Main}:hover &{
    color:${props => props.theme.body};
}
`

const Motivation = () => {
    return (
        <ThemeProvider theme={lightTheme}>
        <Box>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light' />
        <Main>
        <Title>
            <Book width={50} height={50} /> Gain Knowledge
        </Title>
        <Description>
        My main reason to join NWDC is to gain more knowledge especially anything related to web development
        </Description>
        <Title>
            <Networking width={50} height={50} /> Enlarge Networking
        </Title>
        <Description>
        On the other side, i also want to enlarge my networking with people with the same interest
        </Description>
        </Main>
        <Main>
        <Title>
        My Expectation
        </Title>
        <Description>
        My expectation at NWDC is to gain knowledge and experience.
        <br /> <br />
        On the other side, i'm also expect NWDC to be a 'second home' for me to gain much more than a knowledge
        <br /> <br />
        Generally, im expecting NWDC to be much more than a club, but its a 'second home'
        </Description>
        </Main>
            <BigTitle text="ABOUT NWDC" top="80%" right="30%" />
        </Box>
        </ThemeProvider> 
    )
}

export default Motivation