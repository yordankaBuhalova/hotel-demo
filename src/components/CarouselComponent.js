import React, { Component } from 'react';
import { Carousel,Container, } from 'react-bootstrap';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

class CustomCarousel extends Component{
    constructor() {
        super()
        this.state = {
            index: 0,
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex
        })
    };

    customIndicators = () => {
        return(
            <div class="carousel-indicators">
                <button type="button" data-bs-target="" aria-label="Slide 1" class="active" aria-current="true">{this.state.index}</button>
                <button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"><div className='custom-text-style'>{this.state.index}</div></button>
                <button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"><div className='custom-text-style'>{this.state.index}</div></button>
            </div>
        );

    };

    render() {
        return (
            <Container className='custom-container'>
                 <Carousel activeIndex={this.state.index}
                    interval={null}
                    prevIcon={<span aria-hidden="true" className=" carousel-cont-style carousel-control-prev-icon" />}
                    nextIcon={<span aria-hidden="true" className=" carousel-cont-style carousel-control-next-icon" />}
                    indicators={false}
                    onSelect={this.handleSelect}
                    className="carousel-style carousel slide"  >

                    <Carousel.Item className="carousel-item-style">
                        <Card1 className="carousel-card-style"></Card1>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item-style" >
                        <Card2 className="carousel-card-style"></Card2>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item-style" >
                        <Card3 className="carousel-card-style"></Card3>
                    </Carousel.Item>

                </Carousel>
                <div class="carousel-indicators">
                    <button className='btn btn-link'><div className='custom-text-style underline'>01</div></button>
                    <button className='btn btn-link'><div className='custom-text-style'>02</div></button>
                    <button className='btn btn-link'><div className='custom-text-style'>03</div></button>
                </div>

            </Container>
        );
    }
}

export default CustomCarousel;