import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

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
  const [active, setActive] = useState(navItemsList[0].href);
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
            <Nav
              className="nav_Items"
              variant="pills"
              defaultActiveKey={active}
              activeKey={active}
              onSelect={key => {
                setActive(key);
              }}
            >
              {navItemsList?.map(({ href, name }) => {
                return (
                  <Nav.Item key={href}>
                    <Nav.Link href={href} eventKey={href}>
                      {name}
                    </Nav.Link>
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
