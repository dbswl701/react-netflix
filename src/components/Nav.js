import React, {useState, useEffect} from 'react'
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [show, handleShow] = useState(false);
  const [searchValue, setSerchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY)
      if(window.scrollY > 50) handleShow(true);
      else handleShow(false);
      return () => {
        window.removeEventListener('scroll', () => {});
      } 
    })
  }, []);

  const handleChange = (e) => {
    setSerchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  };
    
  return (
    <nav className = {`nav ${show && 'nav__black'}`}>
      <img
        alt='Netflix logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/640px-Netflix_Logomark.png"
        className='nav__logo'
        onClick={() => window.location.reload()}
      />
      <input value={searchValue} onChange={handleChange} className='nav__input' type="text" placeholder='영화를 검색해주세요.' />
      <img
        alt="User logged"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhbjr4DabBgZoJExkz0XylYfuSMpg27kcXQ&usqp=CAU"
        className='nav__avatar'
      />
    </nav>
  );
}
