import './Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {
  let [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={['Navbar', isScrolled ? 'solid' : ''].join(' ')}>
        <a href="https://www.google.com" class="name">Vivek Hegde</a>
        <ul className={['nav-links', active ? 'active' : ''].join(' ')}>
            <li><a href="https://www.google.com">About</a></li>
            <li><a href="https://www.google.com">Work</a></li>
            <li><a href="https://www.google.com">Projects</a></li>
            <li><a href="https://www.google.com">Resume</a></li>
            <li><a href="https://www.google.com">Contact</a></li>
        </ul>
        <div className={['hamburger', active ? 'active' : ''].join(' ')} onClick={() => {setActive(!active)}}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
    </nav>
  );
}

export default Navbar;