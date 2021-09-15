import styled from "styled-components";
import * as theme from "../../../../config/theme";

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;

export const MainWrapper = styled.div`
    display: flex;
    background-image: url("/assets/contact-bg.jpg");
    background-position: center;
    background-position-y: top;
    background-size: cover;
`;

export const Section = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    margin: 7rem 0 3rem 0;
`;

export const ContactContainer = styled.div`
    width: 100%;
    margin-left: 0.5rem;
    box-shadow: 0 0 3px black;
    border-radius: 5px;
`;

export const ServiceContainer = styled.div`
    display: flex;
    width: 100%;
    margin-right: 0.5rem;

    box-shadow: 0 0 3px black;
    border-radius: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    border-radius: 5px;
    backdrop-filter: blur(5px);
    background-image: url("/assets/quote-bg-primary.svg");
`;

export const Column = styled.div`
    display: flex;
    flex-flow: column;
    flex: 8;
    margin: 1rem 5rem;
    align-items: center;
    justify-content: center;
`;
export const TitleWrapper = styled.div`
    display: flex;
    flex-flow: row;
    backdrop-filter: blur(5px);
    border-radius: 5px;
    background-image: url("/assets/quote-bg-secondary.svg");
    background-color: ${theme.default.colors.secondaryDark};
    flex: 1;
    width: 100%;
    align-items: center;
`;
export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-family: ${secondaryFont};

    color: ${primaryColor};
    font-size: 1.5rem;
    margin: 0.2rem 4rem;
`;
export const Card = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 45%;
    margin: 1rem 2rem;
    padding: 0.2rem 1rem;
    background-image: url("/assets/card-bg.svg");
    background-color: ${primaryColor};
    color: ${secondaryColor};
    font-size: 1.1rem;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 black;
    border-radius: 5px;
    text-align: center;
    align-items: center;
`;

export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-image: url("/assets/quote-bg-primary.svg");
    background-color: ${primaryColor};
    box-shadow: inset 0 0 5px #000000;
    border-radius: 50%;
`;

export const Text = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-family: ${secondaryFont};
    text-align: left;
    color: ${theme.default.colors.secondaryDark};
    font-size: 1.5rem;
    margin-left: 1.5rem;
`;
