import styled, { keyframes } from "styled-components";
import * as theme from "./../../../../config/theme";

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;

export const StyledSection = styled.div`
    height: 42rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-evenly;
`;
export const ImageBackground = styled.div``;
const expandAni = (h) => keyframes`
 0% { height: 0;}
 50% { height: ${h / 2} }
 100% { height: ${h} }
`;
export const StyledContainer = styled.div`
    background: rgba(0, 0, 0, 0.4);
    height: ${(props) => (props.animate ? props.height : "")};
    animation-name: ${(props) =>
        props.animate ? expandAni(props.height) : ""};
    animation-duration: ${(props) => (props.animate ? "2s" : "")};
    text-shadow: 0px 0px 5px ${secondaryColor};
    box-shadow: 0px 0px 50px 5px rgb(0 0 0 / 40%);
    margin: 2rem 1rem 2rem 2rem;
    flex: ${(props) => props.flex};
    font-size: 1.5rem;
    border-radius: 5px;
`;
const leftToRight = (h) => keyframes`
 0% { transform: translateX(80%);}
 100% { transform: translateX(0%); }
`;

export const StyledHeaderTitle = styled.h1`
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-top: 1rem;
    font-family: ${secondaryFont};
    color: ${secondaryColor};
    letter-spacing: 1rem;
    font-size: 2.5rem;
    margin: 0 2rem;
    animation-name: ${(props) => (props.animate ? leftToRight : "")};
    animation-duration: ${(props) => (props.animate ? "2s" : "")};
`;
