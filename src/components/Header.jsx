import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from '@emotion/styled';

const Containerbg = styled.div`
    height: 175px;
    background: #9BA1AD 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: row;
    align-items: baseline;
`
const Logo = styled.a`
    display: flex;
    top: 30px;
    left: 158px;
    width: 189px;
    height: 115px;
    background-image: url('../images/inai.png');
`
const TextoHeader = styled.h1`
    display: flex;
    text-align: center;
    font: normal normal 600 50px/60px Lato;
    letter-spacing: 0px;
    color: #0E2146;
    padding: 2rem;
    margin: 0;
    font-family: 'Lato', serif;
`

const Header = ({titulo}) => {
    return (
        <Jumbotron fluid>
            <Container>
                <Containerbg>
                    <Logo></Logo>
                    <TextoHeader>{titulo}</TextoHeader>
                </Containerbg>
            </Container>
        </Jumbotron>
    )
}

export default Header;

