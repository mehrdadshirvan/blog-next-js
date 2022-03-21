import {Carousel} from "react-bootstrap";
import Image from "next/image";

function Slider(props){

    return (
        <div className={`my-3 rounded overflow-hidden`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <Carousel>
                        <Carousel.Item interval={3500}>
                            <Image src="https://www.rosena.ir/public/files/slider/46456.jpg"
                                   alt="First slide"
                                   width="1200px"
                                   height="400px"
                                   className={`d-block w-100`}/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3500}>
                            <Image src="https://www.rosena.ir/public/files/slider/469.jpg"
                                   alt="Second slide"
                                   width="1200px"
                                   height="400px"
                                   className={`d-block w-100`}
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