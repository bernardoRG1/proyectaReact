
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Portfolio, Agencia } from "./pages/index";
import { AnimatePresence } from 'framer-motion';

export default function App() {


  
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} /> 
          <Route path="/Agencia" element={<Agencia />} />
        </Routes>
    </AnimatePresence>
  </Router>
  );
}
