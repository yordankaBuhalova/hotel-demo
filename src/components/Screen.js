import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';


function Screen() {

    return (

        <Row className='d-flex justify-content-around'>
            <Col id="" className="" >
                <Card1 />
            </Col>
            <Col id="preview-div" className="" >
                <Card2 />
            </Col>
            <Col id="" className="" >
                <Card3 />
            </Col>
        </Row>
    );

} export default Screen;