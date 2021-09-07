import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled,{keyframes} from "styled-components";
import * as theme from './../../../config/theme';

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;
const fadeIn = keyframes`
 0%,50% { opacity:0}
 100% { opacity:1 }
`
const View = styled.div`
flex: 1; 
flex-direction: column;
margin: 1rem 0;
animation-name: ${props => props.animate?fadeIn:''};
animation-duration: ${props => props.animate?'2s':''};
`;
const Text = styled.div`
font-size: 1.5rem;
font-family: ${secondaryFont};
color: ${secondaryColor};
text-align: center;

`;

export const VerticalText = (props) =>{
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.05,
        triggerOnce: true
    });
    return (
        <View ref={ref} animate={inView}>
    {props.string.split("").map((char,i) => {
        
        return char!==' '?<Text key={i}>{char}</Text>:<br key={i}/>
    })} 
    </View>)
}