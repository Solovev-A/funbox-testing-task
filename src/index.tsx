import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';


const container = document.getElementById('app-root');
if (!container) throw Error('React app container is undefined');

const root = ReactDOM.createRoot(container);
root.render(<App />);