import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';

import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import Card from 'react-bootstrap/Card'



function Card2() {



    return (


        <Card  className='card2-custom'>
<div className="img-wrapper">
        <Image src={require("../assets/img/restaurant-wintergarten-01-gross.jpg")} className='img_style2 card-img' alt="..."></Image>
</div>
            <div className='card-img-overlay text-pos '>

                <Card.Title className=" sm_text text_color_white">
                    Einmaliges Angebot
                </Card.Title>

                <Card.Body className='text_color_white title-size' >
                    <div className='custom-text text-wrap'>
                        Unser Hotel im Überblick
                    </div>

                </Card.Body>

                <Button  className='buttons_style'>
                    <div className='justify-content-center d-flex ' >
                    <div className='text-uppercase  text-btn '>Mehr erfahren </div>
                    <div className='text-uppercase icon-style '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.054" height="10.595" viewBox="0 0 6.054 10.595">
                            <path id="ScrollDownArrow_light" d="M-296.7,401.054h0l-5.3-5.3V395h.757l4.541,4.541,4.541-4.541h.757v.757Z" transform="translate(-395 -291.405) rotate(-90)" fill="#fff"/>
                        </svg>
                    </div></div>
                </Button>
            </div>
        </Card>

    );

} export default Card2;