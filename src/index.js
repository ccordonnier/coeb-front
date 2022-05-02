import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#c59e16',
            darker: '#001E3C',
            lighter: '#233044',
            contrastText: '#FFFFFFF2',
        },
        secondary: {
            main: '#c59e16',
            contrastText: '#FFFFFFF2',
        },
        background: {
            default: '#001E3C',
            paper: '#233044',
        },
        border: {
            paper: '#005078',
        },
        text: {
            primary: '#FFFFFFF2',
            secondary: '#FFFFFF7F',
            link: '#ff6666',
        },
        button: {
            primary: '#c59e16',
        },
        body: {
            main: "#001E3C",
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#001E3C',
                    contrastText: '#FFFFFFF2',
                    backgroundImage: 'inherit',
                },
            },
        },
    }
});


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider >,
);
