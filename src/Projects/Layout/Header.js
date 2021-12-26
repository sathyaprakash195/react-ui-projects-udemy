import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const path = window.location.pathname
  const menuitems = [
    {
      title: "Home",
      path: "/",
    },
    {
      path: "/rotated",
      title: "Rotated",
    },
    {
      path: "/glowing",
      title: "Glowing",
    },
    {
      path: "/marketing",
      title: "Marketing",
    },
    {
      path: "/colors",
      title: "Colors",
    },
    {
      path: "/parallax",
      title: "Parallex",
    },
    {
      path: "/coffieshop",
      title: "CoffieShop",
    },
    {
      path: "/cars",
      title: "Cars",
    },
  ];
  return (
    <div>
      <div className="menu-switch">
        {showMenu ? (
          <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <HiOutlineMenuAlt1 onClick={() => setShowMenu(!showMenu)} />
        )}
      </div>

      {showMenu && (
        <ul className="menu-items" >
          {menuitems.map((item) => {
            return (
              <li>
                <Link to={`${item.path}`} className={`${path===item.path && 'active'}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Header;
