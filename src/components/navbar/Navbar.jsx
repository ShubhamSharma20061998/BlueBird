import React from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navItemsList = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/aboutus" },
    { name: "Services", href: "/services" },
    { name: "R & D", href: "/how-we-work" },
    { name: "How we Work", href: "/research-developement" },
    { name: "FAQ", href: "/FAQ" },
    { name: "Contact Us", href: "#" },
  ];
  return (
    <div>
      <div className="container-fluid navbar_container">
        <div className="row">
          <div className="col-4">
            <img className="logo" src={logo} alt="LOGO" />
          </div>
          <div className="col-8">
            <Nav className="nav_Items" variant="pills" defaultActiveKey="/home">
              {navItemsList?.map(({ href, name }) => {
                return (
                  <Nav.Item key={href}>
                    <Nav.Link href={href}>{name}</Nav.Link>
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
