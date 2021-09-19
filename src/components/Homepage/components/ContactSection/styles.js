import styled,{keyframes} from "styled-components";
import * as theme from "../../../../config/theme";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
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
    display: flex;
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
    margin: 1rem 2.5rem;
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
    background-image: url("/assets/card-bg-dark.svg");
    background-color:  ${theme.default.colors.secondaryDark};
    color: ${primaryColor};
    font-size: 1.1rem;
    border-radius: 5px;
    box-shadow: inset 0 0 5px 0 black;
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
    margin-left: 1rem;
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
    
    color: ${primaryColor};
    font-size: 1.5rem;
    margin-left: 1.5rem;
`;

export const StyledForm = styled.form`
    width:100%;
`
export const FormContainer = styled.div`
    display:flex;
    flex-direction: column;
`
export const StyledLabel = styled.label`
    
`

export const StyledInput = styled.input`
    height: 2rem;
    font-size: 1rem;
    border-radius: 5px;
    box-shadow: inset 0 0 5px 0 black;
    padding: 0.1rem 1rem;
    margin: 0.5rem 0;
    background-image: url("/assets/card-bg-dark.svg");
    background-color: ${theme.default.colors.secondaryDark};
    color: ${secondaryColor};
    font-family: ${primaryFont};
    border: unset;
    &:focus{
        outline: none;
        background-image:none;
        background-color: rgba(0,173,181,0.6);
        &::placeholder{
        color: ${secondaryColor};
    }
    }
    &::placeholder{
        font-family: ${primaryFont};
        color: ${primaryColor};
        font-weight: 700;
    }
`

export const StyledTextArea = styled.textarea`
    height: 5rem;
    font-size: 1rem;
    border-radius: 5px;
    box-shadow: inset 0 0 5px 0 black;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    font-family: ${primaryFont};
    background-image: url("/assets/card-bg-dark.svg");
    background-color: ${theme.default.colors.secondaryDark};
    color: ${secondaryColor};
    border: unset;
    &:focus{
        outline: none;
        background-image:none;
        background-color: rgba(0,173,181,0.6);
        &::placeholder{
        color: ${secondaryColor};
    }
    }
    &::placeholder{
        color: ${primaryColor};
        font-family: ${primaryFont};
        font-weight: 700;
    }
`
const gradient = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const StyledButton = withStyles((themeMUI) => ({
    root: {
        borderRadius: "100px",
        boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 60%)',
        marginTop: '0.5rem',
        backgroundImage: `linear-gradient(180deg,${primaryColor} 25%,rgba(0,0,0,0) 100%)`,
        
        "&:hover": {
            boxShadow: 'inset 0 0 10px 0 rgb(0 0 0 / 100%)',
            
            transition: 'all .1s ease-in',
            "& .MuiButton-label": {
                letterSpacing: '10px',
                
                color: themeMUI.palette.secondary.main
            }
        }
    },
    label: {
        color: themeMUI.palette.secondary.main,
        textShadow: '0em 0em 0.1em rgb(0 0 0 / 40%)',
        fontFamily: primaryFont,
        fontSize:'1.5rem',
        letterSpacing: "15px",
        transition: 'all .1s ease-in',
    }
}))(Button);