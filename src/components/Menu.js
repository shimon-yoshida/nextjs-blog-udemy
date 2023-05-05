import React from "react";
import Link from "next/link";
import { scaleDown as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Link href="/" className="menu-item" >
        ホームページ
      </Link>

      <Link href="/page-2" className="menu-item" >
        ページ2
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