import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
//import {GlobalStyle} from '@/GlobalStyle.js';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('wrapper'))
    .render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    );
