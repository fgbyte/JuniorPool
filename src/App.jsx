import React from "react";
import "@fontsource/poppins";
import "./App.css";
import Buscador from "./components/Buscador";
import Login from "./components/Login";
export default function App() {
  return (
    <div className="cont">
      <Login />
      <Buscador />
      
    </div>
  );
}
