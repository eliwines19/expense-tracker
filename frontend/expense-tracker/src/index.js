import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalProvider } from './Context/globalContext';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);