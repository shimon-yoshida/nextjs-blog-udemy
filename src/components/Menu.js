import React from "react";
import Link from "next/link";
// import { scaleDown as Menu } from "react-burger-menu";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Link href="/" className="menu-item" >
        ホームページ
      </Link>

      <Link href="/tails" className="menu-item" >
        Tails
        </Link>

        <Link href="/page-3" className="menu-item" >
        ページ3
        </Link>

        <Link href="/page-4" className="menu-item" >
        ページ4
        </Link>
    </Menu>
  );
};
