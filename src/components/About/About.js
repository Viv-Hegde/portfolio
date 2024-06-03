import './About.css';
import about from '../../imgs/about.png';

function About() {
    return (
        <div className='about-container'>
            <div className='title'>ABOUT</div>
            <div className = 'wrapper'>
                <div className='about-text'>
                    <p>
                        I am a recent graduate from the University of Washington with a degree in 
                        Computer Science. I have a strong academic background with a GPA of 3.92 
                        and I have made to the Dean's List for all four years of my college 
                        education. I graduated top 10% of my class and am a Cum Laude honors 
                        recipient.
                    </p>
                    <p>
                        Over the past four years, I have worked on several projects based on my 
                        knowledge of Object Oriented Programming, Data Structures, Algorithm Analysis, 
                        and Software Engineering. I am known among my peers, instructors, and colleagues
                        as a motivated leader, recognized for being passionate, reliable, hardworking,
                        trustworthy, and an enthusiastic collaborator. My extensive experiences in 
                        collaborative software development gained through internships and coursework, 
                        have allowed me to cultivate leadership skills.
                    </p>
                </div>
                <img src={about} alt='about bitmoji'/>
            </div>
            
        </div>
    )
}

export default About;