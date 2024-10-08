import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/not-found/NotFound';
import { Product } from './pages/product/Product';
import { Restaurant } from './pages/restaurant/Restaurant';

function App() {
  return (
    <div className="h-screen bg-secondary">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export { App };
