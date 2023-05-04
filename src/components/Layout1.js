import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const name = "Yashima blog";
export const siteTitle = "Next.js blog";

const Layout = ({ children }) => {
  return (
    <>
    
      <Header />
      <p className="text-lg text-green-500">テストテスト</p>
      {children}

      <Footer />
    </>
  );
};

export default Layout;
