import { Routes } from "components/app";
import { Layout } from "components/layout";
import { Suspense } from "react";

import './App.css';

const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes />
      </Layout>
    </Suspense>
);

export default App;

