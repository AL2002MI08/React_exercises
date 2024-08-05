import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Vans from './Vans/Van';
import VanDetail from './Vans/VanDetail';
import Dashboard from "./Host/Dashboard"
import Income from "./Host/Income"
import Reviews from "./Host/Reviews"
import Layout from './Components/Layout';
import HostLayout from './Components/HostLayout';

import "./server"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(<App />);