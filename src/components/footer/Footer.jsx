import React from "react";
import "./footer.css";
import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdMailOutline,
} from "react-icons/md";
const Footer = () => {
  const contactUs = [
    {
      icon: <MdOutlineLocationOn />,
      title: "Address",
      text_content:
        "PS Aviator Building, Suite No 208, NH12, Chinar Park, Kolkata :700136, West Bengal, India.",
    },
    {
      icon: <MdOutlinePhone />,
      title: "Phone Number",
      text_content:
        "+91 8100162356  / +91 8100162357 Mon-Sat, 9 am until 7 pm.",
    },
    {
      icon: <MdMailOutline />,
      title: "Mail Id",
      text_content: "info@envolta.in We reply within 24 hours",
    },
  ];
  const quickLinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About Us",
      link: "#",
    },
    {
      title: "Services",
      link: "#",
    },
    {
      title: "How we work",
      link: "#",
    },
    {
      title: "Blog",
      link: "#",
    },
    {
      title: "FAQ",
      link: "#",
    },
    {
      title: "Privacy Policy",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
  ];

  return (
    <>
      <div className="footerContainer">
        <div className="container">
          <div className="row">
            <div className="col">
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
            <div className="col">
              <h5 className="heading">Quick Links</h5>
              {quickLinks?.map(({ title, link }) => {
                return (
                  <div className={`${title}`}>
                    {title}
                    <span></span>
                  </div>
                );
              })}
            </div>
            <div className="col">
              <h5 className="heading">locate us</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4>Copyrights © Envolta 2023 All Rights Reserved</h4>
      </div>
    </>
  );
};

export default Footer;
