import React from "react";
import "./landingPageBody.css";
import sustainableEnergy from "../../assets/aboutimg-500x500.png";
import Card from "react-bootstrap/Card";
import operations from "../../assets/operation-icon-2-70x70.png";
import DECOMMISSIONING from "../../assets/decomision-2-70x70.png";
import WASTEMANAGEMENT from "../../assets/wastemangement-2-70x70.png";
import landRemidation from "../../assets/land-remidation.png";
import landRemidationIcon from "../../assets/land-1.png";
import radiation from "../../assets/radiation.jpg";
import radiationIcon from "../../assets/radiation.png";
import environmentProtection from "../../assets/boroscope.jpg";
import environmentProtectionIcon from "../../assets/enviroment.png";
import borescope from "../../assets/boroscopre.jpg";
import borescopeIcon from "../../assets/boroscope-1.png";
import testing from "../../assets/testing.jpg";
import testingIcon from "../../assets/testing-1.png";
import legiationSupport from "../../assets/14-litigation-101.jpg";
import legiationSupportIcon from "../../assets/litigation-1.png";
import { useNavigate } from "react-router-dom";

const LandingPageBody = () => {
  const cardsInfo = [
    {
      image: operations,
      title: "OPERATIONS",
      text_content:
        "Accomplished operators with experienced in all sphere of radiation facility operation and maintenance.",
    },
    {
      image: DECOMMISSIONING,
      title: "DECOMMISSIONING",
      text_content: "Decommissioning of polluted amenities.",
    },
    {
      image: WASTEMANAGEMENT,
      title: "WASTE MANAGEMENT",
      text_content:
        "Blue Bird conveys both knowledge and information for understanding the various waste processing technologies, that includes in-house designs for solid waste management.",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      {/* whoWeAreContainer starts */}
      <div className="container whoWeAreContainer">
        <div className="whoWeAre row">
          <div className="col-5">
            <img
              src={sustainableEnergy}
              alt="sustainableEnergy"
              className="sustainableEnergyImage"
            />
          </div>
          <div className="col-7 whoWeAreTextContent">
            <h2>Who We Are</h2>
            <p>
              Blue Bird is globally recognized as one of the upcoming top-notch
              service providers in the domain of radiological safety based in
              India. We focus on building a healthy relationship with our users
              and serve best in this industry. Our expertise shall provide
              quality assurance services in diagnostic radiology as per the AERB
              norms.
            </p>
            <p>
              Our well experienced and BARC/AERB trained and certified
              professional team along with advanced instrumentation and devices
              will service the superlative expertise, which means your necessity
              to your gratification and attributed to serving quality assurance
              service.
            </p>
            <button
              className="readMoreBtn"
              onClick={() => navigate("/aboutus")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* whoWeAreContainer ends */}
      {/* cardsContainer starts */}
      <div className="container cardsContainer">
        <div className="row">
          {cardsInfo?.map(({ image, title, text_content }) => {
            return (
              <div className="col-4" key={title}>
                <Card className={`cardContainer ${title}`}>
                  <Card.Body className="cardBody">
                    <Card.Img src={image} className="cardImage" />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text_content}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      {/* cardsContainer ends */}
      {/* service section starts */}
      <div className="ourServices">
        <div className="ourServiceContainer container">
          <h2>OUR SERVICES</h2>
          <p>
            Blue Bird is just not a name, it is the brand in the world of
            radiation safety services. We are the “One Source” global technology
            enabled services provider in the ground of survey & evaluation,
            testing measurement, inspection, verification etc.
          </p>
          <div className="row">
            <div className="col-6">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="serviceCardImage"
                    src={landRemidationIcon}
                  />
                  <Card.Title>LAND REMEDIATION</Card.Title>
                  <Card.Text>
                    Taking care of our environment today is the sustainable act
                    for the generations of tomorrow. Land remediation deals with
                    an exclusive process of removing contaminant materials or
                    particles from surface water, terrestrial ground, and
                    sediments.<span className="readMore">Read more</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-5">
              <Card.Img
                variant="top"
                src={landRemidation}
                className="servicesCardsSideImage"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <Card.Img
                variant="top"
                src={radiation}
                className="servicesCardsSideImage"
              />
            </div>
            <div className="col-6">
              <Card>
                <Card.Img
                  variant="top"
                  className="serviceCardImage"
                  src={radiationIcon}
                />
                <Card.Body>
                  <Card.Title>RADIATION SAFETY AND PROTECTION</Card.Title>
                  <Card.Text>
                    Radiation is the process in which energy is emitted and
                    travels in invisible waves or rays. When an emission of
                    energy occurs as electromagnetic waves or as atomic energy,
                    the energy is conveyed in the form of waves or streams of
                    particles.<span className="readMore">Read more</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Card>
                <Card.Img
                  variant="top"
                  className="serviceCardImage"
                  src={environmentProtectionIcon}
                />
                <Card.Body>
                  <Card.Title>ENVIRONMENTAL PROTECTION</Card.Title>
                  <Card.Text>
                    Nature is a unique creation of almighty. It is the
                    government as well as our concern to safeguard our natural
                    environment. The practice of protecting the atmosphere from
                    the harmful influence is typically known as Environmental
                    protection.<span className="readMore">Read more</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-5">
              <Card.Img
                variant="top"
                src={environmentProtection}
                className="servicesCardsSideImage"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <Card.Img
                variant="top"
                src={borescope}
                className="servicesCardsSideImage"
              />
            </div>
            <div className="col-6">
              <Card>
                <Card.Img
                  variant="top"
                  className="serviceCardImage"
                  src={borescopeIcon}
                />
                <Card.Body>
                  <Card.Title>BORESCOPE INSPECTION</Card.Title>
                  <Card.Text>
                    A borescope allows the examiner to examine the places that
                    are otherwise inaccessible by the naked eyes. A borescope is
                    a valuable optical tool and especially designed for
                    non-destructive testing.<span className="readMore">Read more</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Card>
                <Card.Img
                  variant="top"
                  className="serviceCardImage"
                  src={testingIcon}
                />
                <Card.Body>
                  <Card.Title>TESTING & ANALYSIS</Card.Title>
                  <Card.Text>
                    A testing analysis is a technique used for examining the
                    material in the laboratory. Certified laboratory
                    professionals carry out the testing analysis in the domain
                    of fuel, oils and aviation hydraulic fluids.
                    <span className="readMore">Read more</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-5">
              <Card.Img
                variant="top"
                src={testing}
                className="servicesCardsSideImage"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <Card.Img
                variant="top"
                src={legiationSupport}
                className="servicesCardsSideImage"
              />
            </div>
            <div className="col-6">
              <Card>
                <Card.Img
                  variant="top"
                  className="serviceCardImage"
                  src={legiationSupportIcon}
                />
                <Card.Body>
                  <Card.Title>LITIGATION SUPPORT</Card.Title>
                  <Card.Text>
                    “Litigation Support” aid Plaintiff or Defendant in the
                    matter of the pending, existing and/or future Litigation. It
                    deals mainly with the subjects associated to quantification
                    of economic damage.<span className="readMore">Read more</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* service section ends */}
      {/* why believe us starts */}
      <div className="whyBelieveUs">
        <div className="container whyBelieveUsContainer">
          <div className="row">
            <div className="col-9 textContent">
              <h2>Why Believe In Us!</h2>
              <p>
                Blue Bird is a government registered organization and serving
                across the sphere for the welfare of the environment and people.
              </p>
              <p>
                Our well certified and years experienced radiation safety
                officers and engineers team serves you with reliable and
                cost-effective services. Our expertise is working as per AERB
                guidelines and provides quality assurance services for
                radioactive investigative equipment. We are honoured while
                providing quality services to our clients not only India but
                also in the UK, USA, and Switzerland.
              </p>
            </div>
            {/* <div className="col-5 video">
              <iframe
                width="563"
                height="317"
                src="https://www.youtube.com/embed/ojN1CL1rYjo"
                title="Brief about Blue Bird Radiation Protection and Detection Services"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
      {/* why believe us ends */}
    </>
  );
};

export default LandingPageBody;
