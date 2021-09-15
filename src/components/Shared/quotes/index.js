import React from "react";
import styled, {keyframes} from "styled-components";
import { StyledMaxWidthSection } from "../../../style";
import * as theme from '../../../config/theme';

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondaryDark;



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
`
const Quote = (props)=>{
    return (
        <QuoteSection color={props.color}>
            <StyledMaxWidthSection maxWidth={false} className="pulsate-15">
                <QuoteText color={props.color} >
                {props.text}
                </QuoteText>
            </StyledMaxWidthSection>
        </QuoteSection>
    )
}

export default Quote;