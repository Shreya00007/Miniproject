import React from 'react';
import { Container, Row, Col,  } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Login() {
    // const history = useNavigate();
    // function handleSubmit(e) {
    //     e.preventDefault();

    //     history('/home');
    // }
    return (
        <>
            <div className="Restroform">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="Login">
                                
                                <form>
                                    <h3>Login</h3>
                                    <div className="form-group" >

                                        <input type="email" placeholder="Email ID" className="form-control"/>
                                    </div><br/>
                                    <div className="form-group">
                                        
                                        <input type="password" placeholder="Password" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <Link to="/" className="btn btn-success">Submit</Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Login;