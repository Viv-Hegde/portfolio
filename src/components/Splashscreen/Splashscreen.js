import './Splashscreen.css';
import hi from '../../imgs/avatar.gif';

function Splashscreen() {
    return (
        <div className='container'>
            <div className='avatar'>
                <img src={hi} alt='Vivek Hegde Avatar'/>
            </div>
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