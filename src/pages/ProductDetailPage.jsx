import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import SubscribeSction from "components/SubscribeScetion";
import ItemDetailPageInfo from "components/ItemDetailPage/ItemDetailPageInfo";
import ItemDetailTabs from "components/ItemDetailPage/ItemDetailTabs";
import ItemRelatedProducts from "components/ItemDetailPage/ItemRelatedProducts";

function ProductDetailPage() {
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <ItemDetailPageInfo />
            <ItemDetailTabs />
            <ItemRelatedProducts />
          </div>
        </div>
      </div>
      <SubscribeSction />
      <Footer />
    </>
  );
}

export default ProductDetailPage;
