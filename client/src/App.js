import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Market from './routes/Market';
import Item from './components/Item';

function App() {
  return (
    <Router className="App">
      <h1 className="text-3xl font-bold underline">
        APP!
      </h1>
      <Routes>
        <Route path='/market' element={<Market />} />
        <Route path='/item' element={<Item />} />
      </Routes>
    </Router>
  );
}

export default App;
