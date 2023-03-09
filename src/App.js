import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registatration/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
