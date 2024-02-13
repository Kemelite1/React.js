import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import Pricing  from './pages/Pricing';
import Homepage from './pages/Homepage';

 function App() {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element={<Homepage />} />
    <Route path="product" element={<Product />} />
    <Route path="pricing" element={<Pricing />} />

  </Routes>
  </BrowserRouter>
}
export default App;