import { Routes } from "components/app";
import { Layout } from "components/layout";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes />
      </Layout>
    </Suspense>
  </BrowserRouter>
);

export default App;

