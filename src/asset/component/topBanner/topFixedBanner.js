import React, {Component,Fragment} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../css/custom.css'
class TopFixedBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topBanner p-0'>
                    <div className="topOverlay">
                        <Container className="TopbannerContent text-center">
                            <Row>
                                <Col>
                                    <h1>SOFTWARE ENGINEER</h1>
                                    <h4>Mobile & Web Application</h4>
                                    <Button className="btn btn-primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopFixedBanner;