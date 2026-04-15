import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import foodie from "../assets/img/foodie.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import soulSync from "../assets/img/Soul-Sync.png";
import img2048 from "../assets/img/2048.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Puzzle Square Game",
      description: "2048",
      imgUrl: img2048,
      url:'https://puzzle-square-game.vercel.app/'
    },
    {
      title: "Project Foodie",
      description: "Foodie site",
      imgUrl: foodie,
      url: 'https://658e4ddf5e2c056afafdff86--heartfelt-bublanina-459fdd.netlify.app/',
    },
    {
      title: "SoulSync",
      description: "Website",
      imgUrl: soulSync,
      url:'https://soul-sync-a8ni.vercel.app/'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This project showcases my expertise in frontend development using modern technologies like React, Tailwind CSS, and JavaScript.And I focused on creating a clean, user-friendly interface with responsive design for a seamless experience across all devices.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Come Visit and Have Fun.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Come Visit and Have Fun.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}