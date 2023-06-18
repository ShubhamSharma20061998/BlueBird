import React from "react";
import "./RAndD.css";
import vision from "../../assets/digitalmarketing-4-ouoi42wwz80xn7jcbj7d7gtscwcrkmeltgsr0ggyom.jpg";
import researchAndDevelopement from "../../assets/1024_768_1485455844_content_image-6-oul90o1lse4wksxsvvosctd3jdj60tvorqds03vx96.png";

const RAndD = () => {
  return (
    <div>
      <section className="RAndDbanner"></section>
      <section className="container RAndDTextContent">
        <h2>An Overview</h2>
        <p>
          The field of radiation safety and protection involves consistent and
          rigorous research coupled with subsequent development of ideas to
          safeguard the general interest. We at Blue Bird strongly believe in
          putting our expertise in R&D to come up with revolutionary output that
          resonates with both quality and safety norms. Our company is
          registered with AERB and our competent team of researchers aims at
          building technology that simplifies your work, reduces vulnerability
          to risks in the industrial realm, and assists you to make better
          decisions that let your business stay soaring. Concisely, we strive to
          let the earth breathe free of ionizing radiation.
        </p>
        <div className="row">
          <div className="col-md-8">
            <h3>Our Vision For The Mission</h3>
            <p>
              The major pollutants in the physical world are either gaseous in
              nature and sometimes these can be radioactive as well for example
              Radon is a radioactive gas that cannot be detected without
              appropriate testing. At Blue Bird we focus on providing reliable
              services to ensure radiation safety and protection. Moreover, we
              are committed to enhance our sources so that efficiency could be
              sustained at an affordable price. Hence, our strategy is to secure
              Research &amp; Development in all possible spheres of securing
              safety for companies that are looking for trustworthy solutions.
              We are devoted to the three Es as all our applications and
              procedures are based on three elements viz. Efficiency, Economy,
              and Evolution. Our motto is to keep the world safe and make it
              free from the harmful effects of ionizing radiation so that the
              planet we live in becomes a better place over time without
              disturbing the ecological balance.
            </p>
          </div>
          <div className="col-md-4">
            <img src={vision} alt="vision" className="RAndDImage" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h3>Our Domain Of Research And Development</h3>
            <p>
              Blue Bird Research and Development team excels in research and
              development concerned to the following sectors of radiation safety
              and protection.
            </p>
            <li>Industrial Safety Development.</li>
            <li>Radiation Safety Improvement.</li>
            <li>
              Improvement of Radiation Detectors and Identification of Unknown
              Radioactive Materials.
            </li>
            <li>Development of IoT & AI Based Devices.</li>
          </div>
          <div className="col-md-4">
            <img
              src={researchAndDevelopement}
              alt="researchAndDevelopement"
              className="RAndDImage"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Our Latest Safety Jack </h3>
            <p>
              <b>ROBODET</b>- An IOT Based Inspection Bot for a Total Safety
              Thought.
            </p>
            <p>
              Our latest innovation is a fully working robot based on the
              Internet of Things (IoT). It is equipped with intelligent features
              that make it an ideal device to not only detect hazardous gas
              leakage at industrial sites but to prevent accidents too. As we
              already know that chemical factory sites and various industrial
              units are prone to sudden gas leakage and other mishaps. More
              often, manual handling and direct physical human intervention can
              lead to other severe hazards. For this, our team of experts have
              come up with a prudent mechanism that blends technology and
              artificial intelligence. The designed device is both trendy and
              handy too. The compact arrangement makes it apt for use in home
              automation systems, industrial robotics, advanced health care
              devices, personal weather station monitoring, security systems,
              etc. ROBODET is a practical implementation of the Internet of
              Things (IoT) solutions similar to other industrial robots. It
              serves as a link to bridge the gap between hardware and software
              technology applied to real-time operating systems (RTOS). The use
              of this type of robot can improve productivity, security, safety,
              and manpower. Robots have been developed to perform various types
              of work like manufacturing robots for packing in the food beverage
              industry, welding robot in the automobile industry, mobile robots
              in space. Our research of several months has successfully yielded
              the inspection robot that can smartly sense the presence of
              poisonous gases and in turn, warns about the same using IoT
              technology. Interestingly, it is potent enough to share the
              recorded data over diverse digital means of communication
              including that on the World Wide Web.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RAndD;
