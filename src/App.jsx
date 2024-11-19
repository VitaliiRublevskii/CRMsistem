import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import AppRoutes from './Routes.jsx';
import Navigation from './components/Navigation.jsx';



function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Navigation />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
