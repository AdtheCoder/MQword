import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/HomePage/Home.jsx";
import DashBorad from "./pages/DashBorad/DashBorad.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import Login from "./pages/AuthPage/Login.jsx";
import Register from "./pages/AuthPage/Register.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBorad />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
