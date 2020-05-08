import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Routes from './routes';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <div className="screen-divider">
        <Sidebar />
        <Routes/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
