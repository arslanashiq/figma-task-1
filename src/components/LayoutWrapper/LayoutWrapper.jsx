import Footer from "components/Footer";
import Header from "components/Header";
import SubscribeSction from "components/SubscribeScetion";
import React from "react";
import { Outlet } from "react-router-dom";

function LayoutWrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <SubscribeSction />
      <Footer />
    </>
  );
}

export default LayoutWrapper;
