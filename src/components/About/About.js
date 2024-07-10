import './About.css';
import about from '../../imgs/about.png';

function About() {
    return (
        <div className='about-container'>
            <div className='title'>ABOUT</div>
            <div className = 'wrapper'>
                <div className='about-text'>
                <p>
                    Hello! I'm Vivek Hegde, a recent Computer Science graduate from the University of Washington. With a strong academic background and practical work experience, I have honed my software engineering skills to develop user-friendly and impactful applications.
                </p>
                <p>
                    I graduated in the top 10% of my class with Cum Laude honors and a GPA of 3.92, consistently making the Dean's List throughout my college education. My experience spans full-stack web development, utilizing technologies like HTML, CSS, JavaScript, and React for the front-end, and Node.js, Python with Flask, C# with .NET, and Java with Spring for the back-end. I am also proficient with databases such as MySQL, PostgreSQL, and SQLite, and use Git for version control. My applications are hosted using Docker and AWS.
                </p>
                <p>
                    Beyond coding, I am a gamer, an avid anime watcher, and a chess enthusiast. I find inspiration in adventure, often hiking and exploring new places.
                </p>
                <p>
                    My goal is to continuously learn and grow as a developer, while contributing to projects that positively impact users and communities. Feel free to browse through my work and reach out if you'd like to collaborate or learn more about my journey.
                </p>

                </div>
                <img src={about} alt='about bitmoji'/>
            </div>
            
        </div>
    )
}

export default About;