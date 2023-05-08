import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const name = "Yashima blog";
export const siteTitle = "Next.js blog";

const Layout = ({ children }) => {
  return (
    <>
    {/* <div id="outer-container"> */}
    {/* <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right width={ 220 } className="place-self-end"/> */}
    <Menu right width={ 220 } />
    <Header />
    
    {/* <main id="page-wrap"> */}
    <main>
      
      {children}

      {/* <Footer /> */}
      </main>
      {/* </div> */}
    </>
  );
};

export default Layout;
