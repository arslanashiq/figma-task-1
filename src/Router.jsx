import LayoutWrapper from "components/LayoutWrapper/LayoutWrapper";
import LandingPage from "pages/LandingPage";
import Page404 from "pages/Page404";
import ProductDetailPage from "pages/ProductDetailPage";
import ProductListPage from "pages/ProductListPage";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/product-listing" index element={<ProductListPage />} />
        <Route path="/product-detail" index element={<ProductDetailPage />} />
      </Route>
      <Route path="*" index element={<Page404 />} />
    </Routes>
  );
}

export default Router;
