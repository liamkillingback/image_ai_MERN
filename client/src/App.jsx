import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home } from "./page";
import { Navbar } from "./components";

const App = () => (
  <BrowserRouter>
    <main className="main bg-cover bg-no-repeat bg-center  px-4  w-full min-h-screen pt-28">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
