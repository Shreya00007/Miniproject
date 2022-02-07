import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap'

class Home extends Component {
    render() {
        return(
            <div>
            <div className="showcase-container">
        <h1 className="main-title" id="home">Eat Right Food</h1>
        <p>Eat Healty, it is good for our health.</p>
      </div>

      <div className="">
      <Container>
  <Row>
    <Col md="6">
    <div className="about-text">
          <p className="small">About Us</p>
          <h2>We've beem making healthy food last for 10 years</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
            eos omnis, nobis dignissimos perferendis et officia architecto,
            fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
            maiores praesentium soluta alias asperiores saepe commodi
            consequatur? Perferendis est placeat facere aspernatur!
          </p>
        </div></Col>
    <Col md="6">
    <div ClassName="about-img">
          <img src="component/about-photo.jpg" alt="food"/>
        </div>
    </Col>
  </Row>
</Container>
      </div>
            </div>
        );
    }
}

export default Home;