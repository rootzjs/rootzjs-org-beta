import React from 'react'
import { darkThemeStyles } from './Dark';
import { lightThemeStyles } from './Light';
import { commonThemeStyles } from './Common';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const appTheme = (theme, forComponent) => {
      if (theme === "light") {
            return createMuiTheme({
                  ...lightThemeStyles,
                  ...commonThemeStyles(theme),
            });
      } else if (theme === "dark") {
            return createMuiTheme({
                  ...darkThemeStyles,
                  ...commonThemeStyles(theme),
            });
      }
      else {
            return createMuiTheme({
                  ...lightThemeStyles,
                  ...commonThemeStyles(theme),
            });
      }
}

export const AppTheme = ({ children, theme, forComponent }) => <ThemeProvider theme={appTheme(theme, forComponent)}>{children}</ThemeProvider>