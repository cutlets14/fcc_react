/* eslint-disable jsx-a11y/img-redundant-alt */
import swimmer from '../images/swimmer.png'
import star from '../images/star.png'

const Card = () => {
    return (
        <div className="div--card">
            <img src={swimmer} alt="Image of Katie Zaferes" className="div--img"/>
            
            <div className="div--stats">
                <img src={star} alt="Image of a red star" className="div--star"/>
                <span>5.0</span>
                <span className="div--gray">(6) {'\u2022'}</span>
                <span className="div--gray">USA</span>
            </div>
            <p>Life Lessions with Katie Zaferes</p>
            <p><span className="div--bold">From $136</span> /person</p>
        </div>
    )
}

export default Card;