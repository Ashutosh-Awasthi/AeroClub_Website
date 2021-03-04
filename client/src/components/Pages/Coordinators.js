import React from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/coordinators&Nontech/Amit Gupta.jpg";
import f2 from "../../images/coordinators&Nontech/Sandeep Singh.jpg";
import f3 from "../../images/coordinators&Nontech/Devansh Sethi.jpg";
import f4 from "../../images/coordinators&Nontech/Kanak Agrawal.jpg";
import f5 from "../../images/coordinators&Nontech/nitish kushwaha.jpeg";
import f6 from "../../images/coordinators&Nontech/Pushpa Devi.jpeg";
import f7 from "../../images/coordinators&Nontech/RUCHI SRIVASTAVA.jpg";
import f8 from "../../images/coordinators&Nontech/Prasanna Sneha.png";
import f9 from "../../images/coordinators&Nontech/Ayush.jpg";
import f10 from "../../images/coordinators&Nontech/Rishabh.jpg";
import f11 from "../../images/coordinators&Nontech/Harsh Kumar Singh.jpg";
import f12 from "../../images/coordinators&Nontech/Bhuvan Jhumb.jpg";
import f13 from "../../images/coordinators&Nontech/Apoorva Dinesh Singh.jpg";
import f14 from "../../images/coordinators&Nontech/Archit Chaudhary.jpg";
import f15 from "../../images/coordinators&Nontech/Ayan Santania.jpg";
import f16 from "../../images/coordinators&Nontech/ABHISHEK GAUTAM.jpg";
import f17 from "../../images/coordinators&Nontech/Karimulla Mohammad.bmp";
import f18 from "../../images/coordinators&Nontech/Ankur Singh.jpg";

export default function Coordinators() {
  document.title = "Coordinators | Aero Club";

  const members = [
    {
      emailAddress: "amit758000@gmail.com",
      name: "Amit Gupta",
      year: "2nd",
      photo: f1,
      linkedinId: "https://www.linkedin.com/in/amit-gupta-0b64991bb/",
      areaOfInterests:
        "Drone Automation (Pixhawk, SITL), Coding, Design Software",
    },
    {
      emailAddress: "sandeepsingh.avanti@gmail.com",
      name: "SANDEEP SINGH",
      year: "2nd",
      photo: f2,
      linkedinId: "https://www.linkedin.com/in/sandeep-singh-b020a6168/",
      areaOfInterests: "Coding,Drone automation, updation in series of drone.",
    },
    {
      emailAddress: "devanshsethi77@gmail.com",
      name: "Devansh Sethi",
      year: "2nd",
      photo: f3,
      linkedinId: "https://www.linkedin.com/in/devansh-sethi-2a97721b3/",
      areaOfInterests:
        " Fixed Wing planes, Construction of planes, wings dynamics.",
    },
    {
      emailAddress: "akanak101@gmail.com",
      name: "Kanak Agrawal",
      year: "2nd",
      photo: f4,
      linkedinId: "https://www.linkedin.com/in/kanak-agrawal-03b55b159/",
      areaOfInterests: "Design and Analysis of Quadcopter",
    },
    {
      emailAddress: "nitishkumarkushwaha89@gmail.com",
      name: "Nitish Kumar",
      year: "2nd",
      photo: f5,
      linkedinId: "https://www.linkedin.com/in/nitish-kumar-9b1b84206/",
      areaOfInterests: "Plane & Drone designing",
    },
    {
      emailAddress: "prasannamkumar43@gmail.com",
      name: "Prasannam Kumar Sah",
      year: "2nd",
      photo: f6,
      linkedinId: "https://www.linkedin.com/in/prasannam-kumar-sah-a4125b1b2/",
      areaOfInterests: "Drones , electronics , software , coding",
    },
    {
      emailAddress: "ruchi1112200@gmail.com",
      name: "Ruchi Srivastava",
      year: "2nd",
      photo: f7,
      linkedinId: "https://www.linkedin.com/in/ruchi-srivastava-aaa2701b3",
      areaOfInterests:
        "Fixed wing planes, Design software, Structural analysis",
    },
    {
      emailAddress: "prasannasneha1322@gmail.com",
      name: "Prasanna Sneha",
      year: "2nd",
      photo: f8,
      linkedinId: "Prasanna Sneha",
    },
    {
      emailAddress: "ayushchaturvedi702@gmail.com",
      name: "Ayush Chaturvedi",
      year: "2nd",
      photo: f9,
      areaOfInterests:
        "Design and Manufacturing , Drone Automation (Basics i.e dronekit)",
    },
    {
      emailAddress: "rishabhdwivedi462@gmail.com",
      name: "Rishabh Dwivedi",
      year: "2nd",
      photo: f10,
      linkedinId: "https://www.linkedin.com/in/rishabh-dwivedi-8b85491a2",
      areaOfInterests: "AUTOCAD, Aerodynamics, ",
    },
    {
      emailAddress: "harshkumarsingh325@gmail.com",
      name: "Harsh Kumar Singh ",
      year: "2nd",
      photo: f11,
      linkedinId: "harshkumarsingh325@gmail.com",
      areaOfInterests: "Drone automation",
    },
    {
      emailAddress: "bhuvanjhamb29@gmail.com",
      name: "Bhuvan Jhamb",
      year: "Final",
      photo: f12,
      linkedinId: "https://www.linkedin.com/in/bhuvanjhamb",
      areaOfInterests:
        "Drone Automation, Controls, Deep Learning, Simulations.",
    },
    {
      emailAddress: "apoorva011199@gmail.com",
      name: "Apoorva Dinesh Singh ",
      year: "Final",
      photo: f13,
      linkedinId: "https://www.linkedin.com/in/apoorva-singh-0111",
      areaOfInterests: "ML, CV",
    },
    {
      emailAddress: "chaudharyarchit2000@gmail.com",
      name: "ARCHIT CHAUDHARY",
      year: "Final",
      photo: f14,
      linkedinId: "https://www.linkedin.com/in/archit-chaudhary-010a78164/",
      areaOfInterests: "Automation, aerodynamics",
    },
    {
      emailAddress: "ayan.santania@gmail.com",
      name: "Ayan Kishore",
      year: "Final",
      photo: f15,
    },
    {
      emailAddress: "abhishekgautam689@gmail.com",
      name: "Abhishek Gautam",
      year: "Final",
      photo: f16,
      linkedinId: "https://www.linkedin.com/in/abhishekgautam01",
      areaOfInterests: "Design and analysis of planes, Control and Electronics",
    },
    {
      emailAddress: "karimulla17999@gmail.com",
      name: "Karimulla Mohammad",
      year: "2nd",
      photo: f17,
      linkedinId: "https://www.linkedin.com/in/karimulla1098/",
      areaOfInterests: "Stimulation, ROS, ML",
    },
    {
      emailAddress: "as096255@gmail.com",
      name: "Ankur Pratap Singh",
      year: "2nd",
      photo: f18,
      linkedinId: "https://linkedin.com/in/ankur-singh-82496514b/",
      areaOfInterests:
        "Gaming, Autonomous vehicles, Data Science, Computer Vision, Drone Racing, etc.",
    },
  ];

  return (
    <>
      <Loading time={2} />
      <div className=" pagesa">
        <div className="overlaya">
          <div className="pageTitlea titleBolda">Coordinators</div>
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Core Coordinators
      </div>
      <div className="container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "Final" && (
                <div class="card card-item shadow" style={{ width: "17rem" }}>
                  <img
                    class="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 class="card-title text-center text-uppercase">
                      {member.name}
                    </h5>
                    <p
                      class="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href={member.linkedinId} target="_blank">
                        <i class="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Senior Coordinators
      </div>
      <div className="container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "3rd" && (
                <div class="card card-item shadow" style={{ width: "15rem" }}>
                  <img
                    class="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 class="card-title text-center">{member.name}</h5>
                    <p
                      class="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      {member.year} year <br />
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href={member.linkedinId} target="_blank">
                        <i class="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Junior Coordinators
      </div>
      <div className="container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "2nd" && (
                <div class="card card-item shadow" style={{ width: "17rem" }}>
                  <img
                    class="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 class="card-title text-center">{member.name}</h5>
                    <p
                      class="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href={member.linkedinId} target="_blank">
                        <i class="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
