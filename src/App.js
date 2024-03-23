import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Presale from './pages/Presale';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/presale" element={<Presale />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
