import 'bootstrap';
import React from 'react';
import ReactDOM from "react-dom"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Data from "./pages/Data"; 
import News from "./pages/News";
import Opinion from "./pages/Opinion"; 
import NoPage from "./pages/NoPage"; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function App() {   
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="Data" element={<Data />} />
        <Route path="News" element={<News />} />
        <Route path="Opinion" element={<Opinion />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
} 

ReactDOM.render(<App />, document.getElementById("root"));