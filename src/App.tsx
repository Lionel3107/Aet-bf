import React from 'react';
import './App.css';
import InternetStatusComponent from "./components/utils/InternetStatusComponent";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
      <BrowserRouter>
          <InternetStatusComponent/>
          <Routes>
              <Route path="/" element={<PageLayout />}>
                  <Route
                      path="/"
                      element={<Home />}
                  />
                  <Route path="historique" element={<Home />} />

                  <Route path="" element={<ErrorPage />} /> {/* Catch-all route for error */}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
