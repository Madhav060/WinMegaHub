import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css";

// Image Imports
import contest1 from "../assets/girl-taking-photo-3959468_1280.jpg";
import contest2 from "../assets/writing-923882_1280.jpg";
import contest3 from "../assets/coding.jpeg";
import contest4 from "../assets/contest4.jpg";
import contest5 from "../assets/painting.jpg";
import contest6 from "../assets/music.jpg";
import contest7 from "../assets/quiz.jpg";
import contest8 from "../assets/dance.jpg";
import aboutImg from "../assets/best-about-us-pages-removebg-preview.png"; // Optional illustration image

const Home = () => {
  return (
    <Container fluid className="p-4 home-container">
      {/* Banner */}
      <Row className="justify-content-center mb-5 banner-section">
        <Col md={10}>
          <h1 className="banner-text">Welcome to WinMegaHub!</h1>
          <p className="sub-text">
            Your one-stop destination for exciting contests and rewards.
          </p>
          <Button className="get-started-btn mt-4">Get Started</Button>
        </Col>
      </Row>

      {/* Ongoing Contests */}
      <h2 className="section-title">🔥 Ongoing Contests</h2>
      <Row className="g-4 justify-content-center">
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest1} alt="Photography Contest" />
            <Card.Body>
              <Card.Title>Photography Contest</Card.Title>
              <Card.Text>
                Capture the beauty around you and stand a chance to win exciting prizes.
              </Card.Text>
              <Button className="gradient-btn">Join Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest2} alt="Short Story Contest" />
            <Card.Body>
              <Card.Title>Short Story Contest</Card.Title>
              <Card.Text>
                Let your words weave magic. Submit your best short story today.
              </Card.Text>
              <Button className="gradient-btn">Join Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest3} alt="Coding Challenge" />
            <Card.Body>
              <Card.Title>Coding Challenge</Card.Title>
              <Card.Text>
                Solve exciting problems and showcase your programming skills.
              </Card.Text>
              <Button className="gradient-btn">Join Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest7} alt="Design Challenge" />
            <Card.Body>
              <Card.Title>Design Challenge</Card.Title>
              <Card.Text>
                Showcase your UI/UX design skills with innovative interfaces.
              </Card.Text>
              <Button className="gradient-btn">Join Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* About Section */}
      <div className="about-section mt-5 mb-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img src={aboutImg} alt="About" className="img-fluid about-img" />
          </Col>
          <Col md={6}>
            <h2 className="section-title">📖 About WinMegaHub</h2>
            <p className="about-text">
              WinMegaHub is a vibrant platform that brings together creative minds from all walks
              of life. We host a wide range of contests — from art and photography to coding and
              quizzes — providing a stage for everyone to shine.
              <br /><br />
              Our mission is to recognize talent, foster innovation, and reward passion. Whether
              you're an artist, a coder, a storyteller, or a performer — there's a contest for you
              here.
            </p>
          </Col>
        </Row>
      </div>

      {/* Upcoming Contests */}
      <h2 className="section-title">🗓️ Upcoming Contests</h2>
      <Row className="g-4 justify-content-center">
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest4} alt="Art Contest" />
            <Card.Body>
              <Card.Title>Art Contest</Card.Title>
              <Card.Text>
                Unleash your creativity. Submit your artwork and inspire others.
              </Card.Text>
              <Button className="gradient-btn">Know More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest5} alt="Music Battle" />
            <Card.Body>
              <Card.Title>Music Battle</Card.Title>
              <Card.Text>
                Showcase your musical talent and compete with the best.
              </Card.Text>
              <Button className="gradient-btn">Know More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest6} alt="Science Quiz" />
            <Card.Body>
              <Card.Title>Science Quiz</Card.Title>
              <Card.Text>
                Test your knowledge and win exciting prizes in our quiz challenge.
              </Card.Text>
              <Button className="gradient-btn">Know More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Img variant="top" src={contest8} alt="Dance Duel" />
            <Card.Body>
              <Card.Title>Dance Duel</Card.Title>
              <Card.Text>
                Bring your best moves and compete in our high-energy dance battle.
              </Card.Text>
              <Button className="gradient-btn">Know More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* How to Participate */}
      <h2 className="section-title mt-5">📝 How to Participate</h2>
      <Row className="mt-4 mb-5 text-center how-to-steps">
        {[
          {
            icon: "🧑‍💻",
            title: "Register",
            desc: "Create your free account and get started instantly.",
          },
          {
            icon: "🎯",
            title: "Choose Contest",
            desc: "Pick a contest that aligns with your passion or skill.",
          },
          {
            icon: "📤",
            title: "Submit Entry",
            desc: "Upload your best work before the deadline.",
          },
          {
            icon: "🏆",
            title: "Win & Celebrate",
            desc: "Earn rewards, recognition, and bragging rights!",
          },
        ].map((step, idx) => (
          <Col md={3} key={idx}>
            <Card className="how-card shadow-lg border-0 h-100">
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
                <div className="icon-circle mb-3">{step.icon}</div>
                <h5 className="fw-bold">{step.title}</h5>
                <p className="text-muted">{step.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
