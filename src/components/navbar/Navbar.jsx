import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navItemsList = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "How we Work", href: "/how-we-work" },
    { name: "R & D", href: "/research-developement" },
    { name: "FAQ", href: "/FAQ" },
    // { name: "Contact Us", href: "#" },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-fluid navbar_container">
        <div className="row">
          <div className="col-4">
            <img
              className="logo"
              src={logo}
              alt="LOGO"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="col-8">
            <Nav className="nav_Items" variant="pills" defaultActiveKey="/">
              {navItemsList?.map(({ href, name }) => {
                return (
                  <Nav.Item key={href}>
                    <Link to={href} eventKey={href} className={`${href} links`}>
                      {name}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
