import styled, { keyframes } from "styled-components";
import * as theme from "../../../../config/theme";

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;

const slideIn = () => keyframes`
    0%{
      transform: translateX(0%);
    }
    100%{
      transform: translateX(-100%);
    }
  }`;

export const SectionBg = styled.div`
    background-image: ${(props) =>
        props.selectFirst
            ? "url('/assets/solution-b.jpg')"
            : "url('/assets/hero-image.jpg')"};
    background-size: cover;
    width: 50%;
    background-position-x: center;
    background-position-y: center;
    transform: ${(props) =>
        props.selectFirst ? "translateX(0%)" : "translateX(-100%)"};
    padding: 11rem 0;
    transition: transform 500ms ease-in-out, background-image 500ms ease-in-out;
`;
export const Section = styled.div`
    display: flex;
    align-items: stretch;
    height: 80vh;
    background-color: transparent;
`;

export const Column = styled.div`
    display: flex;
    flex-flow: ${(props) => (props.flow !== "row" ? props.flow : "row")};
    flex: 1;
    margin: 0rem 1rem;
    align-items: center;
`;

export const CardTitle = styled.div`
    display: flex;
    box-shadow: 0 0 5px 0 black;
    flex: 1;
    width: 100%;
    background-image: url("/assets/card-bg.svg");
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-family: ${secondaryFont};
    color: ${secondaryColor};
    font-size: 2rem;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;
    text-shadow: 0px 0px 3px #4c4c4c;
`;
export const CardBody = styled.div`
    display: flex;
    flex: 3;
    width: 100%;
    background-image: url("/assets/card-bg.svg");
    color: ${secondaryColor};
    font-size: 1.1rem;
    align-items: center;
    font-weight: 500;
    transition: transform 1s;
    transform-style: preserve-3d;
`;

export const CardBodyFront = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    padding: 0 1vw;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 0 5px 0 black;
    backface-visibility: hidden;
`;
export const CardBodyBack = styled.div`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 0 5px 0 black;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export const Card = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 45%;
    margin: 1rem 0;
    backdrop-filter: blur(5px);
    border-radius: 5px;
    text-align: center;
    align-items: center;
    &:hover ${CardBody} {
        transform: rotateY(180deg);
    }
`;
