import collage from '../images/collage.png'

const Hero = () => {
    return (
        <div className="top--div">
            <img src={collage} alt="Hero collage" className="div--image"/>
            <h2 className="div--heading">Online Experiences</h2>
            <p className="div--paragraph">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )

}

export default Hero;