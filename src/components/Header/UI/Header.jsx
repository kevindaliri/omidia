import React, { useRef, useEffect} from 'react'
import '/Users/kevindaliri/digital-agency/src/styles/Header.css'
import omidia from '/Users/kevindaliri/digital-agency/src/images/justcircle.svg';
import omidia2 from '/Users/kevindaliri/digital-agency/src/images/justtext.svg';

const nav__links = [
  {
    path: '#hero__section',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#web',
  display: 'Work',
},
{
  path: '#newsletter',
  display: 'Contact',
},

];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const journeyBarRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('header__shrink');
    } else {
      headerRef.current.classList.remove('header__shrink');
    }

    updateJourneyBar();
  };

  const updateJourneyBar = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.pageYOffset;
    const journeyBarWidth = (scrollPosition / (documentHeight - windowHeight)) * 100;

    journeyBarRef.current.style.width = `${journeyBarWidth}%`;
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);

    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
      <a href="#hero__section" className='header__home'>
          <div className="logo">
          <img src={omidia} alt="" className="logo1" />
          <img src={omidia2} alt=""  className='logo2'/>
          </div>
          </a>

          

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu__link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
            <div className="journey__bar" ref={journeyBarRef}></div>
          </div>

          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
