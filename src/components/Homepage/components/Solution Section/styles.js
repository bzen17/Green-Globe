import styled from "styled-components";
import * as theme from './../../../../config/theme';

const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;
export const SectionBg = styled.div`
background-image: url('/assets/solution-b.jpg');
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  padding:3rem 0;
`
export const Section = styled.div`
  display: flex;
  align-items: stretch;
  height: 80vh;
  padding:1rem;
  padding-bottom: 5rem;
  background-color:transparent ;
  
  
`
export const Column = styled.div`
    display: flex;
    flex-flow: ${props=>props.flow!=='row'?props.flow:'row'};
    flex: 1 ;
    margin: 0rem 1rem;
    align-items: center;
    
`
export const Card = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 45%;
    background-image: url('/assets/quote-bg-primary.svg');
    margin: 1rem 0;
    box-shadow: 0 0 5px 0;
    backdrop-filter: blur(10px);
    text-align: center;
    border-radius: 5px;
`