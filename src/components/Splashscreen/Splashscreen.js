import './Splashscreen.css';
import hi from '../../imgs/hi.png';

function Splashscreen() {
    return (
        <div className='container'>
            <img src={hi} alt='hi bitmoji'/>
            <div className='text'>
                <div className='iamvivek'> Hi! I am Vivek.</div>
                <div className='intro'>
                    I'm a full stack web developer passionate about transforming complex ideas into 
                    user-friendly and impactful digital experiences.
                </div>
            </div>
        </div>
    )
}

export default Splashscreen;