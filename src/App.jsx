import LandingPage from "pages/LandingPage";
import Page404 from "pages/Page404";
import ProductDetailPage from "pages/ProductDetailPage";
import ProductListPage from "pages/ProductListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/product-listing" index element={<ProductListPage />} />
        <Route path="/product-detail" index element={<ProductDetailPage />} />
        <Route path="*" index element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
