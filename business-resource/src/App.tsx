import React from 'react';
import logo from './logo.svg';
import MyComponent from './components/MyComponent/MyComponent';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const dataList = ['Stellar', 'Coffee'];

function App() {
  return (
    <div className="App">
        <Navbar />
    </div>
  );
}

export default App;
