import React from "react";
import "./footer.css";
import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdMailOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  const contactUs = [
    {
      icon: <MdOutlineLocationOn />,
      title: "Address",
      text_content: "address",
    },
    {
      icon: <MdOutlinePhone />,
      title: "Phone Number",
      text_content: "+91 xxxxx xxxxx",
    },
    {
      icon: <MdMailOutline />,
      title: "Mail Id",
      text_content: "info@company.in We reply within 24 hours",
    },
  ];
  const quickLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "How we work",
      link: "/how-we-work",
    },
    {
      title: "FAQ",
      link: "/research-developement",
    },
    // {
    //   title: "Contact",
    //   link: "/FAQ",
    // },
  ];

  return (
    <>
      <div className="footerContainer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h5 className="heading">Contact Us</h5>
              {contactUs?.map(({ icon, title, text_content }) => {
                return (
                  <div className={`row ${title}`} key={title}>
                    <h6>
                      <span>{icon}</span>
                      {title}
                    </h6>
                    <p>{text_content}</p>
                  </div>
                );
              })}
            </div>
            <div className="col-4">
              <h5 className="heading">Quick Links</h5>
              <div className="quickLinksContainer">
                {quickLinks?.map(({ title, link }) => {
                  return (
                    <Link to={link} className="footerLinks">
                      {title}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* <div className="col">
              <h5 className="heading">locate us</h5>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>Copyrights © company 2023 All Rights Reserved</h4>
      </div>
    </>
  );
};

export default Footer;
