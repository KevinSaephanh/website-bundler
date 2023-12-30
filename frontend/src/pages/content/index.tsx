import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const root = document.createElement('div');
root.id = 'website-bundler';

document.body.appendChild(root);

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
