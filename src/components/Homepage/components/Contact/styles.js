import styled from "styled-components";
import * as theme from './../../../../config/theme';

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;

export const Section = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    margin: 6rem 0 3rem 0 ;
    background-color: ${secondaryColor};
`;

export const ContactContainer = styled.div`
    flex: 1;
    width: 100%;
    margin:1rem;
    background-image: url('/assets/quote-bg-primary.svg');
    background-color: ${primaryColor};
    box-shadow: 0 0 3px black;
    border-radius: 5px;

`

export const ServiceContainer = styled.div`
    flex:2;
    width: 100%;
    margin:1rem;
    background-image: url('/assets/quote-bg-primary.svg');
    background-color: ${primaryColor};
    box-shadow: 0 0 3px black;
    border-radius: 5px;
`