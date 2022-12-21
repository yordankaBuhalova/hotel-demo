import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';

import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import Card from 'react-bootstrap/Card'



function Card3() {



    return (


        <Card className='card3-custom'>
            <Image src={require("../assets/img/image_2022_12_12T08_40_05_889Z.png")} className='img_style3' alt="..."></Image>

            <div className='card-img-overlay bg-container '>
                <Card.Subtitle className=" sm_text text_color_white">
                    Einmaliges Angebot
                </Card.Subtitle>
                <Card.Title className='text_color_white custom-space title-size'>Weitwandern in Salzburg
                </Card.Title>
                <Card.Body>
                <Button  className='button_with_redhover'>
                    <div className='justify-content-center d-flex ' >
                    <div className='text-uppercase  text-btn '>Mehr erfahren </div>
                    <div className='text-uppercase icon-style'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.054" height="10.595" viewBox="0 0 6.054 10.595">
                            <path id="ScrollDownArrow_light" d="M-296.7,401.054h0l-5.3-5.3V395h.757l4.541,4.541,4.541-4.541h.757v.757Z" transform="translate(-395 -291.405) rotate(-90)" fill="#fff"/>
                        </svg>
                    </div></div>
                </Button></Card.Body>
            </div>
        </Card>


    );

} export default Card3;