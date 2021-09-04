import styled from 'styled-components';
import * as theme from './../../config/theme';
import LogoLite from '../../assets/logoLite.png';
import LogoTheme from '../../assets/logoTheme.png';
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
  src: LogoLite,
};


export const StyledHeader = styled.div`
  font-family: ${secondaryFont};
  ${'' /* border: 2px solid #d3d6e1; */}
  transition: all 0.15s ease 0s;
  flex-flow: row nowrap;
  z-index: unset;
  //height: 5rem;
  background-color: ${theme.default.colors.primary};
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100vw;
  box-shadow: 0 2px 4px 0 #d3d6e1;
`;

export const StyledDivContainer = styled.div`
  ${'' /* padding: 1rem 0 0 0; */}
  height: 4rem;
`;

export const StyledNavButton = styled.div`
  font-family: ${secondaryFont};
  margin: 0 0 0 0.5rem;
  padding: 0.5rem 0.8rem;
  letter-spacing: 2px;
  border-radius: 5px;
  
  background-color: ${theme.default.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid ${theme.default.colors.secondary};
  line-height: 1;
  text-align: center;
  color:${theme.default.colors.secondary};
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  :hover {
    color: ${theme.default.colors.primary};
    background-color: ${theme.default.colors.secondary};
    border: 1px solid ${theme.default.colors.secondary};
  }
`;

export const StyledMenu = withStyles({
  paper: {
      margin: '0px',
      border: `1px solid ${theme.default.colors.primary}`,
      "z-index": 10,
      borderRadius:'5px'
  }
})((props) => (
  <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
      }}
      transformOrigin={{
          vertical: "top",
          horizontal: "right"
      }}
      {...props}
  />
));
export const StyledMenuItem = withStyles((theme) => ({
  root: {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.primary.main
    },
      "&:hover": {
          backgroundColor: theme.palette.primary.main,
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
              color: theme.palette.secondary.main
          }
      }
  },
}))(MenuItem);

export const StyledButton = withStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  label:{
    color: theme.palette.primary.main
  }
}))(Button);