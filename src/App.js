import React from 'react';
import Navbar from './components/navbar/Navbar';
import { MuiThemeProvider } from 'material-ui';
import './App.css';
import Search from './components/search/Search';


function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar/>
        <Search/>
      </div>
    </MuiThemeProvider>
  );
}


export default App;
