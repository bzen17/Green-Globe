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
    background: ${(props) =>
        props.color === "primary" ? primaryColor : secondaryColor};
`;

export const Divider = styled.div`
    width: 100vw;
    height: 9.75vw;
    display: block;
    background: transparent;
    z-index: 2;
    position: relative;
    transform: translateZ(0);
    margin-bottom: -1px;
    color: ${(props) =>
        props.color === "primary" ? primaryColor : secondaryColor};
`;
