import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Rought = () => {
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
    <Navbar expand="lg" className="container-fluid navbar_container">
      <Navbar.Brand href="#home">
        <img
          className="logo"
          src={logo}
          alt="LOGO"
          onClick={() => navigate("/")}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav_Items">
          {navItemsList?.map(({ href, name }) => {
            return (
              <Link to={href} eventKey={href} className={`${href} links`}>
                {name}
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Rought;
