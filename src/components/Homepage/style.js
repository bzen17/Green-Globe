import styled from 'styled-components';
import * as theme from './../../config/theme';
const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;

export const StyledWrapper = styled.div`
  
  object-fit: fill;
  position: relative;
  height: ${props => props.viewPortHeight - 64+'px'};
`;

export const BannerImage = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 1000px;
  object-fit: contain;
  opacity: 0.5;
`;
export const StyledBannerTextContainer = styled.div`
  z-index: 9;
  width: 100%;
  height: 100%;
  padding-bottom: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(0 0 0 / 0.1);
  transition: all 2s ease-in-out;
`;

export const StyledBannerHeader = styled.div`
  flex-grow: 0;
  margin: 0 0.5625rem 0 0;
  font-family: ${secondaryFont};
  font-size: 2.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  transition: all .7s ease-in-out;
`;
export const StyledBannerHeaderHighlight = styled.span`
  background: #e20074;
`;
export const StyledBannerDesc = styled.div`
  flex-grow: 0;
  margin: 1.25rem 9rem 0;
  font-family: ${primaryFont};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
`;

export const StyledSectionWrapper = styled.div`
  padding-top: 9.375rem;
  padding-bottom: 6rem;
  background-size: 100%;
`;

export const StyledSectionHeader= styled.div`
  margin: 0 0 1.25rem;
  font-family: ${secondaryFont};
  font-size: 3rem;
  font-weight: normal;
  line-height: 0.92;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`;

export const StyledSectionLite = styled.div`

`
export const HeroModule = styled.section `
  margin-top: 4vh;
  align-content: center;
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;  
  justify-content: center;

  picture {
    grid-area: 1 / 1 / 2 / 2;

    img {
      display: grid;
      height: 100%;
      min-width: 350px;
      object-fit: cover;
      width: 100%;
    }
  }

  .color-overlay {
    background: black;
    background: linear-gradient(
                    60deg,
                    rgba(0, 0, 0, 0.8) 30%,
                    rgba(255, 255, 255, 0) 100%
    );
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    max-width: 100%;
  }

  .content {
    align-items: center;
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    margin: 0 1.5em;
    
    .content-wrapper {
      color: white;
      
      h1 {
        font-size: calc(10pt + 0.15vw);
        letter-spacing: 0.05em;
        font-weight: bolder;
        text-transform: uppercase;
        margin: 0;
      }

      p {
        font-size: calc(10pt + 0.15vw);
        margin: .5em 0 1.5em;
      }

      button {
        background-color: transparent;
        border: 1px solid white;
        border-radius: .5em;
        color: white;
        cursor: pointer;
        font-size: calc(8pt + 0.15vw);
        font-weight: bold;
        padding: calc(0.5em + 0.08vw);
        text-align: center;
        text-transform: uppercase;

        &:link,
        &:visited {
          text-decoration: none;
        }
      }
    }
  }
`