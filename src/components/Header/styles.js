import styled from 'styled-components';
import * as theme from './../../config/theme';
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
const primaryFont = theme.default.fonts.primary;
const secondaryFont = theme.default.fonts.secondary;
const primaryColor = theme.default.colors.primary;
const secondaryColor = theme.default.colors.secondary;
export const StyledHeaderLogo = styled.img`
  width: 9rem;
  pointer-events: none;
`;

StyledHeaderLogo.defaultProps = {
  src: '/assets/logoLite.png',
};


export const StyledHeader = styled.div`
  font-family: ${secondaryFont};
  ${'' /* border: 2px solid #d3d6e1; */}
  transition: all 0.15s ease 0s;
  flex-flow: row nowrap;
  z-index: unset;
  //height: 5rem;
  margin-bottom: -4rem;
  background-color: 'transparent';
  position: static;
  top: 0;
  z-index: 10;
  width: 100vw;
`;

export const StyledDivContainer = styled.div`
  ${'' /* padding: 1rem 0 0 0; */}
  height: 4rem;
`;

export const StyledNavButton = styled.div`
  font-family: ${secondaryFont};
  margin: 0 0 0 0.5rem;
  padding: 0.5rem;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  text-align: center;
  color: ${theme.default.colors.secondary};
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  :hover {
    text-decoration: underline;
  }
`;

export const StyledMenu = withStyles({
  paper: {
      minWidth: '150px',
      marginTop: '10px',
      "z-index": 10,
      borderRadius:'5px',
      backgroundColor: 'transparent'
  }
})((props) => (
  <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
      }}
      transformOrigin={{
          vertical: "top",
          horizontal: "left"
      }}
      {...props}
  />
));
export const StyledMenuItem = withStyles((theme) => ({
  root: {
    borderRadius: '5px',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    "&:focus":{
      backgroundColor: 'transparent',
    },
    
    "& .MuiListItemIcon-root":{
      minWidth: '40px'
    },
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.secondary.main
    },
      "&:hover": {
          backgroundColor: theme.palette.primary.main,
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
              color: theme.palette.secondary.main,
          },
          
      }
  },
}))(MenuItem);

export const StyledButton = withStyles((themeMUI) => ({
  root: {
    padding: '0.25rem 1rem',
    borderRadius: '5px',
    margin: themeMUI.spacing(1),
    border: `1px solid ${themeMUI.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: themeMUI.palette.primary.main,
      "& .MuiButton-label":{
        color: themeMUI.palette.secondary.main,
      }
    }
  },
  label:{
    color: themeMUI.palette.primary.main,
    fontFamily: secondaryFont,
    letterSpacing:'3px',
  }
}))(Button);