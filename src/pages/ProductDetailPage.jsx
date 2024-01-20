import React from "react";
import ItemDetailPageInfo from "components/ItemDetailPage/ItemDetailPageInfo";
import ItemDetailTabs from "components/ItemDetailPage/ItemDetailTabs";
import ItemRelatedProducts from "components/ItemDetailPage/ItemRelatedProducts";

function ProductDetailPage() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <ItemDetailPageInfo />
          <ItemDetailTabs />
          <ItemRelatedProducts />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
