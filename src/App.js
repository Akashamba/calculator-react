import React, {useState} from 'react';
import Display from './components/display/display.component.jsx';
import ButtonsContainer from './components/buttons/buttons-container.component.jsx';
import { Container, CssBaseline, useMediaQuery } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () =>
        createMuiTheme({
            palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            },
        }),
        [prefersDarkMode],
    );

    const [expression, setExpression] = useState(' ')
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <Container maxWidth="sm" >
                    <p className="title" >Calculator v1</p>
                    <Display expression={expression} />
                    <ButtonsContainer expression={expression} setExpression={setExpression} />
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
