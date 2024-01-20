import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import ProductListing from "components/ProductListing";
import SubscribeSction from "components/SubscribeScetion";

function ProductListPage() {
  return (
    <>
      <Header />
      <ProductListing />
      <SubscribeSction />
      <Footer />
    </>
  );
}

export default ProductListPage;
