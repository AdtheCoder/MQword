import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
