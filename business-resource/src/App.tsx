import React from 'react';
import logo from './logo.svg';
import MyComponent from './components/MyComponent/MyComponent';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import RouteLinks from './components/RouteLinks/RouteLinks';
import {BrowserRouter} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

const dataList = ['Stellar', 'Coffee'];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RouteLinks/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
