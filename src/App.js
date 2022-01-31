import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components';

const Pockemons = lazy(() => import('./pages/Pockemons'));

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Pockemons />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
