import React from 'react';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import { heroSlideImages } from '../js/photos';
import "../styles/hero.css"

class Hero extends React.Component {
    state = {
        slideCount: 0,
    }

    nextSlide = () => {
        if(this.state.slideCount === heroSlideImages.length - 1){
            this.setState({ slideCount: 0 })
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 })
        }
    }

    prevSlide = () => {
        if(this.state.slideCount === 0 ){
            this.setState({ slideCount: heroSlideImages.length - 1 })
        } else {
            this.setState({ slideCount: this.state.slideCount - 1 })
        }
    }

    render(){
        const { slideCount } = this.state;
        return(
            <div className="hero-section" id="hero-section">
                <div className="hero-img-container">
                    <AiOutlineLeft className="btn-left arrow" onClick={this.prevSlide}/> 
                    <AiOutlineRight className="btn-right arrow" onClick={this.nextSlide}/>
                    {
                        heroSlideImages.map((img, i ) => {
                            return(
                                <div className={slideCount === i ? 'slide active' : 'slide'}>
                                    {i === slideCount && (
                                    <div 
                                    style={{
                                        background: `URL(${img.url}) no-repeat`, 
                                        backgroundSize: '100%',
                                        backgroundPosition: 'center'
                                        }} 
                                    className="hero-img" key={i} />)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Hero;