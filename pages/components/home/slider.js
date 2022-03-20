import {Carousel} from "react-bootstrap";

function Slider(props){

    return (
        <div className={`my-3 rounded overflow-hidden`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <Carousel>
                        <Carousel.Item interval={3500}>
                            <img
                                className="d-block w-100"
                                src="https://www.rosena.ir/public/files/slider/46456.jpg?_t=1587774264"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3500}>
                            <img
                                className="d-block w-100"
                                src="https://www.rosena.ir/public/files/slider/469.jpg?_t=1587774264"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Slider;