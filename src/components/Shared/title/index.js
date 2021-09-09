import React from "react";
import styled from "styled-components";
import { StyledMaxWidthSection } from "../../../style";
import * as theme from './../../../config/theme';

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondaryDark;
const TitleSection = styled.div`
    height: 15vh;
    display: flex;
    background-color: inherit;
    justify-content: center;
    align-items: flex-start; /* CHANGED */
    /*align-self: center;*/
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
`
const TitleContainer = styled.div`
    background: ${props=>props.color!=='primary'?secondaryColor:primaryColor};
    border-bottom-right-radius:50px;
`
const TitleText = styled.div`
    font-family: ${secondaryFont};
    font-size: 4.5vh;
    flex: 0 1 auto;
    text-align: left;
    margin-left:2rem;
    padding:0.3rem 0;
    padding-right: 1.8rem ;
    backdrop-filter: blur(10px);
    
    color: ${props=>props.color!=='primary'?primaryColor:secondaryColor}
`
const Title = (props)=>{
    return (
        <TitleSection >
            <TitleContainer color={props.color}>
                <StyledMaxWidthSection maxWidth={true} style={{margin:'0'}}>
                    <TitleText color={props.color}>
                    {props.text}
                    </TitleText>
                </StyledMaxWidthSection>
            </TitleContainer>
        </TitleSection>
    )
}

export default Title;