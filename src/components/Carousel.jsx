import { useState } from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import './Carousel.css'

function Carousel({ data }) {

    const [slider, setSlider] = useState(0)

    function nextSlide() {
        setSlider(slider === data.length - 1 ? 0 : slider + 1)
    }

    function prevSlide() {
        setSlider(slider === 0 ? data.length - 1 : slider - 1)
    }

    return (
        <div className="carousel">
            {data.map((img, index) => {
                return (
                    <>
                        <SlArrowLeft 
                            className='arrow arrow-left' 
                            onClick={prevSlide}
                        />
                        <img
                            src={img.url}
                            alt={img.alt}
                            key={index}
                            className={slider === index ? "slider" : "slider slider-hidden"}
                        />
                        <SlArrowRight 
                            className='arrow arrow-right'
                            onClick={nextSlide}
                        />
                        <div className='btn-container'>
                            {data.map((_, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={slider === index ? "btn" : "btn btn-inactive"}
                                        onClick={() => setSlider(index)}
                                    >
                                    </button>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Carousel