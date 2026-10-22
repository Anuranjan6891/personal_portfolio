
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project img1.png";
import projImg2 from "../assets/img/project img2.png";
import projImg3 from "../assets/img/project img3.png";
import projImg4 from "../assets/img/project img4.png"
import colorSharp2 from "../assets/img/color-sharp2.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Music Clone App",
      description:
        "Developed a responsive music player interface using HTML, CSS, and JavaScript. Implemented play, pause, next, previous, progress tracking, and volume controls for an interactive music-streaming experience.",
      imgUrl: projImg3,
      category: "web",
    },
    {
      title: "NALAM – Elderly Care & Local Assistance Platform",
      description:
        "Built a platform that helps families discover caregiving and local assistance services for elderly individuals. Includes service discovery, caregiver information, trust and safety details, and assistance request workflows.",
      imgUrl: projImg1,
      category: "web",
    },
    {
      title: "AgentShield – Policy & Privacy Gateway for AI Agents",
      description:
        "Developed a full-stack security gateway that intercepts AI-agent tool requests and allows, blocks, or routes high-risk actions for human approval. Includes contextual authorization, tool-level access control, PII detection and redaction, and a real-time audit dashboard.",
      imgUrl: projImg2,
      category: "other",
    },
    {
      title: "ClassGuard – Smart Classroom Management Platform",
      description:
        "Designed a centralized platform for classroom activities, academic information, and parent-teacher communication. Helps teachers and parents share classroom updates and student-related information through a structured workflow.",
      imgUrl: projImg4,
      category: "other",
    },
  ];

  const renderProjects = (category) =>
    projects
      .filter(
        (project) =>
          category === "all" || project.category === category
      )
      .map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ));

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>Projects</h2>

                  <p>
                    Here are some of the projects I have worked on
                    across web development, application security,
                    and classroom management. Through these
                    projects, I have explored responsive UI design,
                    interactive functionality, full-stack
                    development, and practical software solutions.
                  </p>

                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="all"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="all">
                          All Projects
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="web">
                          Web Development
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="other">
                          Other Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="all">
                        <Row>{renderProjects("all")}</Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="web">
                        <Row>{renderProjects("web")}</Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="other">
                        <Row>{renderProjects("other")}</Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};


