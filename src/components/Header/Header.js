import React, { Component } from 'react';
import './Header.css';
import {Container, Row, Col} from 'react-bootstrap'
class Header extends Component {
    
   
   
   render() {
       return (
      
           <div className='card-section'>
           <Container>
           <Row>
           <Col md={4} xs={12}>
           <h1>gallery</h1>
           </Col>
           </Row>
           </Container>
           </div>
               
              
            
        );
    }
}

export default Header;
