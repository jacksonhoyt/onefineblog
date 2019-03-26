import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

const style = {
    backgroundColor: "white",
    borderTop: "1px solid #E7E7E7",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "200px",
    width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '200px',
  width: '100%',
}

class SiteFooter extends React.Component {
    render(){
        return(
            <Footer color="blue" className="fixed-navbar font-small pt-4 mt-4">
                <div style={phantom}></div>
                <div style={style}>
                  <Container fluid className="text-center text-md-left">
                      <Row>
                      <Col sm="6">
                          <h5 className="title">One Fine Blog</h5>
                          <p>a site designed by doggos who bloggo</p>
                      </Col>
                      <Col sm="6">
                          <h5 className="title">links</h5>
                          <ul>
                          <li className="list-unstyled"><a href="#!">link 1</a></li>
                          <li className="list-unstyled"><a href="#!">link 2</a></li>
                          <li className="list-unstyled"><a href="#!">link 3</a></li>
                          <li className="list-unstyled"><a href="#!">link 4</a></li>
                          </ul>
                      </Col>
                      </Row>
                  </Container>
                  <div className="footer-copyright text-center py-3">
                      <Container fluid>
                          &copy; {(new Date().getFullYear())} Copyright
                      </Container>
                  </div>
                </div>
            </Footer>
        );
    }
}

export default SiteFooter;
