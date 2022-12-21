import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/custom.css';

import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'


function Card1() {

    return (
        <Card className='card1-custom '>
            <Stack className='card-img-overlay cap-1 gradient'>

                <Card.Subtitle className=" sm_text sm_text_color_black">
                    Einmaliges Angebot
                </Card.Subtitle>
                <Card.Title className='title-size custom-space'>
                    Unsere Zimmer im Überblick
                </Card.Title>


                <div  className='card-footer'>
                <Button  className='buttons_style '>
                    <div className='justify-content-center d-flex ' >
                    <div className='text-uppercase  text-btn '>Mehr erfahren </div>
                    <div className='text-uppercase icon-style'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6.054" height="10.595" viewBox="0 0 6.054 10.595">
                            <path id="ScrollDownArrow_light" d="M-296.7,401.054h0l-5.3-5.3V395h.757l4.541,4.541,4.541-4.541h.757v.757Z" transform="translate(-395 -291.405) rotate(-90)" fill="#fff"/>
                        </svg>
                    </div>
                    </div>
                </Button></div>


            </Stack>

            <Image  className='img_style card-img' alt="zimmer-bergblick" src={require("../assets/img/zimmer-bergblick-07-gross.webp")}></Image>
        </Card>
    );

} export default Card1;