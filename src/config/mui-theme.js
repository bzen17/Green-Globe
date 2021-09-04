import { createTheme } from '@material-ui/core/styles';
import * as theme from './theme';

const muiTheme = createTheme({
    palette: {
        primary: {
            light: theme.default.colors.primaryLight,
            main: theme.default.colors.primary,
            dark: theme.default.colors.primaryDark,
          },
          secondary:{
            light: theme.default.colors.secondaryLight,
            main: theme.default.colors.secondary,
            dark: theme.default.colors.secondaryDark,
          },
    },
    typography:{
        fontFamily: `Montserrat, sans-serif, -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif`,
        fontWeightLight: 300,
        fontWeightRegular: 600,
        fontWeightMedium: 700,
      }
  });

  export default muiTheme