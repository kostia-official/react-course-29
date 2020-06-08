import React from 'react';
import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

export const ThemeProvider = (props) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: teal,
      secondary: teal,
    },
  });

  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MaterialThemeProvider>
  );
};
