import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components';
import { 
  AnsiedadPage, 
  DueloPage, 
  RegulacionEmocionalPage, 
  AdolescentesPage 
} from './index';

/**
 * Example of how to integrate the new specialty pages using react-router-dom.
 * 
 * To use this, you would:
 * 1. Install react-router-dom: npm install react-router-dom
 * 2. Update your main App component or entry point to use a Router.
 */

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Your existing Home component would go here */}
          <Route path="/" element={<div>Home Component (Existing App content)</div>} />
          
          {/* New Specialty Pages */}
          <Route path="/ansiedad" element={<AnsiedadPage />} />
          <Route path="/duelo" element={<DueloPage />} />
          <Route path="/regulacion-emocional" element={<RegulacionEmocionalPage />} />
          <Route path="/adolescentes" element={<AdolescentesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
