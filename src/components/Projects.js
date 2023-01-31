import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "snapzy",
      description: "MERN + RestAPI",
      imgUrl: projImg1,
      link: "https://github.com/hs-07/snapzy",
    },
    {
      title: "netflix-clone",
      description: "ReactJS + API",
      imgUrl: projImg2,
      link: "https://github.com/hs-07/netflix-clone-react",
    },
    {
      title: "covid-19 Tracker",
      description: "ReactJS + API",
      imgUrl: projImg3,
      link: "https://github.com/hs-07/Covid-19_Tracker",
    },
    {
      title: "Magic Notes",
      description: "HTML + CSS + JS",
      imgUrl: projImg4,
      link: "https://hs07-notes.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects & Experiences</h2>
                  <p>
                    <i>
                      When you start a new project, you wonder whether it’s the
                      right choice. Every new project I do is a new invention of
                      myself and reinvigorates me as to why I love coding.✨
                    </i>
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experiences</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Open Source</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div className="experiences">
                          <div className="experience">
                            <div className="title">
                              <div className="heading">
                                <h4>
                                  <u> Freelancer </u>
                                </h4>
                                <div className="sub-heading">
                                  <h5>Satyansatan Organisation</h5>
                                </div>
                              </div>
                            </div>

                            <div className="exp-desc">
                              <p>
                                🔸 Optimized the dashboard of the website,
                                inserted tinyURL generator and customizable URL
                                feature and additional features in sharing the
                                verse on different social media <br />
                                🔸 Worked on the front-end part of the Website,
                                enhanced the UX <br />
                                🔸 Angular UI + MySQL based project.
                              </p>
                            </div>

                            <div className="sub-footer">
                              <h5>Duration: 2 months</h5>
                            </div>
                          </div>

                          <div className="experience">
                            <div className="title">
                              <div className="heading">
                                <h4>
                                  {" "}
                                  <u> Web Developer Intern </u>{" "}
                                </h4>
                                <div className="sub-heading">
                                  <h5>STARZVentures</h5>
                                </div>
                              </div>
                            </div>
                            <div className="exp-desc">
                              <p>
                                🔸 Designed and developed lots of LANDING PAGES
                                and WEBSITES on the WordPress software <br />
                                🔸 The outcome of my internship benefited the
                                company in increase in the sales and more
                                traffic over their page for work.
                              </p>
                            </div>
                            <div className="sub-footer">
                              <h5>Duration: 3 months</h5>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div className="o-s">
                          <div className="title">
                            <a
                              href="https://www.opencost.io/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <h4> KubeCost /opencost</h4>
                            </a>
                          </div>
                          <div className="os_desc">
                          🔸OpenCost is a Sandbox Project under CNCF. I enabled
                            DARK MODE on the complete website. <br />
                            🔸Used ReactJS,
                            Docusarus, GitHub Actions and VS Code.
                          </div>
                          <div className="os-btn">
                            <a href="https://github.com/opencost/opencost-website/pull/54" target="_blank" rel="noopener noreferrer"><button>PR Link</button></a>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
