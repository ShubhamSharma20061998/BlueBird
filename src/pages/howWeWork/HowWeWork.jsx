import React from "react";
import "./HowWeWork.css";
import raditionSurvey from "../../assets/radioactivity-100x100.png";
import inspectionReport from "../../assets/certification-100x100.png";
import radiationProtectionandSafetySolution from "../../assets/radioactivity-protecting-100x100.png";
import PostInspectionReview from "../../assets/inspection-review-1-100x100.png";
import OurFacilities from "../../assets/maintenance-amenities-100x100.png";
import secureyoufromradiationrisks from "../../assets/quality-assurance-100x100.png";

const HowWeWork = () => {
  return (
    <div>
      <section className="banner"></section>
      <div className="container howWeWorkTextContent">
        <h3>
          We are a team of certified professionals with proven expertise and
          skilful approach. Our commitment is to render quality service and we
          ensure your safety from ionizing effects of radiation.
        </h3>
        <div className="row">
          <div className="col-3">
            <img src={raditionSurvey} alt="raditionSurvey" />
          </div>
          <div className="col-9">
            <h5>Official visit & Radiation Survey:</h5>
            <p>
              Firstly, our competent radiation safety officers visit the entire
              site for a detailed survey. We use “survey meters” exclusively
              designed to measure the intensity of the radiation source. Our
              findings are thus accurate and fully reliable.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img src={inspectionReport} alt="inspectionReport" />
          </div>
          <div className="col-9">
            <h5>Inspection Report:</h5>
            <p>
              The official inspection is followed by subsequent verification of
              the radioactive particles and detailed report generation from our
              side. This report includes a detailed analysis of the emission,
              for e.g., parent source (radioactive isotope) and nature of
              substances being emitted by the source. Broadly, radiation is
              classified as either Naturally Occurring Radioactive Material
              (NORM) or as Technically Enhanced NORM.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img
              src={radiationProtectionandSafetySolution}
              alt="radiationProtectionandSafetySolution"
            />
          </div>
          <div className="col-9">
            <h5>Radiation Protection and Safety Solution:</h5>
            <p>
              The term “ENVOLTA” in Portuguese means encased in or wrapped in.
              We shield you and your loved ones from hazardous radiation. Our
              integrated approach to radiation protection and safety makes us a
              trustworthy name in the service domain. Our specialists will
              explain all aspects of radiation in details and will chalk out
              guidelines and all possible solutions. To be precise, our experts
              will help you to put a check on environment pollution.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img src={PostInspectionReview} alt="PostInspectionReview" />
          </div>
          <div className="col-9">
            <h5>Post Inspection Review:</h5>
            <p>
              The next step is the successful installation of radiation safety
              instruments as per your requirement. Our devices and
              modus-operandi perfectly comply with the AERB radiation safety
              norms. In addition, our trained professionals perform a leak test
              to further endorse the effectiveness of the overall process. We
              provide an exclusive report to rule out all possibilities of any
              mishap.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img src={OurFacilities} alt="OurFacilities" />
          </div>
          <div className="col-9">
            <h5>Our Facilities:</h5>
            <p>
              Regular maintenance is the key to excellent performance. Our low
              cost maintenance services set us ahead of the race. Our equipment
              and instruments are quite easy to maintain and affordable. Still
              not sure? Please feel free to connect and let us help you with
              more details.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img
              src={secureyoufromradiationrisks}
              alt="secureyoufromradiationrisks"
            />
          </div>
          <div className="col-9">
            <h5>
              We follow a five-fold path to secure you from radiation risks:-
            </h5>
            <li>Detection of the source of radiation</li>
            <li>Identification of the nature of radiation</li>
            <li>Calculation of the quantum for radiation</li>
            <li>Protection from radiation & allied services</li>
            <li>Maintenance of radiation within the permissible limits</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
