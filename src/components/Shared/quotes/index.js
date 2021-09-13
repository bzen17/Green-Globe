import React from "react";
import styled, {keyframes} from "styled-components";
import { StyledMaxWidthSection } from "../../../style";
import * as theme from './../../../config/theme';

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondaryDark;

const pulsate = () => keyframes`
    0%,100% { font-size:1.2rem}
    50% { font-size:1.5rem }

`

const QuoteSection = styled.div`
    height: 15vh;
    display: flex;
    background-color: ${props=>props.color==='primary'?primaryColor:secondaryColor};
    background-image: ${props=>props.color==='primary'?`url('/assets/quote-bg-primary.svg')`:`url('/assets/quote-bg-secondary.svg')`};
`
const QuoteText = styled.q`
    font-family: ${secondaryFont};
    font-size: 1.2rem;
    text-align: center;
    color: ${props=>props.color==='primary'?secondaryColor:primaryColor};
    -webkit-animation: ${pulsate} 10s ease-in-out;
    -webkit-animation-iteration-count: infinite; 
`
const Quote = (props)=>{
    return (
        <QuoteSection color={props.color}>
            <StyledMaxWidthSection maxWidth={false}>
                <QuoteText color={props.color} className='pulsate'>
                {props.text}
                </QuoteText>
            </StyledMaxWidthSection>
        </QuoteSection>
    )
}

export default Quote;