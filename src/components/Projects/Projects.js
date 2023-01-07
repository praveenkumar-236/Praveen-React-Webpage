import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
            imgPath={"https://praveenpkportfolio.netlify.app/static/media/mern-stack.be461fe1.jpg"}
              isBlog={false}
              title="Covid Tracker Website"
              description="A Website that shows covid counts and latest news of about covid-19.The website is built 
              using HTML,CSS & Javascript.The webpage has google translator so that everyone can read 
              the news in their comfortable language.The webpage displays the latest tweets by Ministry of Health and some more additional
               user friendly features are also available!"
              ghLink="https://github.com/praveenkumar-236?tab=repositories"
              demoLink="#"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://praveenpkportfolio.netlify.app/static/media/react-redux.152d29f5.jpg"}
              isBlog={false}
              title="Student Information Application"
              description="The Informations about the Students can be Added,Deleted,Edited and Viewed.The backend operation are done using Springboot and 
              ReactJs is Used for frontend .The informations are stored in MongoDb.This Kind of application will help to manage student informations !"
              ghLink="https://github.com/praveenkumar-236?tab=repositories"
              demoLink="#"
            />
          </Col>

                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://praveenpkportfolio.netlify.app/static/media/fullstackjava.0579c4e1.jpg"}
              isBlog={false}
              title="Discount Application Using ODM"
              description="`A appliction that calculates the discount for the selected country .For this discount calculation,Operational Decison Manager(ODM) tool
              and Springboot is used.ReactJs is used for frontend and Mysql database is used !"
              ghLink="https://github.com/praveenkumar-236?tab=repositories"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://praveenpkportfolio.netlify.app/static/media/react.aae10464.png"}
              isBlog={false}
              title="AirLines Ticket Booking"
              description="A application for online airlines ticket booking.Built using Springboot and uses MySql database for storing data. In this application the tickets of the 
              passengers can booked by themselves and they can view ,download and cancel it when it is necessary.This will be usefull for those who using airline service regularly.
              It is a user-friendly application so that anyone can easily book the ticket.User can the check the details of the plane such us timing,date accurarately and they can book it accordingly !"
              ghLink="https://github.com/praveenkumar-236?tab=repositories"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://praveenpkportfolio.netlify.app/static/media/html-css-javascript.1d4b020e.jpg"}
              isBlog={false}
              title="Data Security Approach On Cyber Crime With Web Vulnerability"
              description="This Application a prediction model for detecting vulnerabilities of web applications by applying machine learning techniques of Support and
              Deep learning techniques to predict the vulnerability in kddcup Dataset. In Deep Approach like LSTM (Long Short Term Memory) and Machine Learning Algorithm 
              like Random Forest is used and we easily classify the data in deep layer by layer to implement the process !"
              ghLink="https://github.com/praveenkumar-236?tab=repositories"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"data:image/jpeg;base64,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"}
              isBlog={false}
              title="Portfolio - My Web Page"
              description="A professional portfolio website built using ReactJS.It displays the home page that contains the role name and educational details, project details,working experience and users can send mails through contact page.The contact page allows the users to contact the user.The main purpose of the react page is 
    showcasing the full details of a devoloper!"
              ghLink="https://github.com/praveenkumar-236?tab=repositories"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
      <h2 style={{color:"white"}}>Next Project<br/>Loading...!</h2>
    </Container>
  );
}

export default Projects;
