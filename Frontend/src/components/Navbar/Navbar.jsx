import { useEffect, useState } from "react";
import './Navbar.css'
import { BrowserRouter, Route, useLocation, useNavigate } from "react-router-dom";
import SkillsPage from '../../pages/HabilidadesPage/Skills'

export default function Navbar(){
  const [isHover, setIsHover] = useState(false);

  const handleMouse = () => {
    setIsHover(true);
  };
  
  const handleMouseLeave = () => {
    setIsHover(false);
  };


  const navigation = useNavigate();

  const goToHomePage = () =>{
    navigation('/')
  }

  const goToSkillsPage = () => {
    navigation('/habilidades')
  }

  const goToFormAcPage = () => {
    navigation('/formacaoAcademica')
  }

  const goToCertPage = () => {
    navigation('/certificados')
  }

  const goToProjPage = () => {
    navigation('/projetos')
  }

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/'){
      document.getElementById('Home').classList.add('active')
    } else if (location.pathname === '/habilidades'){
      document.getElementById('Habilidades').classList.add('active')
    } else if (location.pathname === '/formacaoAcademica'){
      document.getElementById('FormAc').classList.add('active')
    } else if (location.pathname === '/certificados'){
      document.getElementById('Certificados').classList.add('active')
    } else if (location.pathname === '/projetos'){
      document.getElementById('Projetos').classList.add('active')
    }
  }, [location])

  return(
       <nav id='navbar' className={`navigation ${isHover ? 'open' : ''}`} onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
        <ul>
          <li className="" id="Home">
            <a onClick={goToHomePage}>
              <ion-icon className='ion-icon' name="home-outline"></ion-icon>
              <span>
                Inicio
              </span>
            </a>
          </li>
          <li className="" id="Habilidades">
            <a onClick={goToSkillsPage}>
              <ion-icon className='ion-icon' name="code-slash-outline"></ion-icon>
              <span>Habilidades</span>
            </a>
          </li>
          <li className="" id="FormAc">
            <a onClick={goToFormAcPage}>
              <ion-icon className='ion-icon' name="school-outline"></ion-icon>
              <span>Formação Acadêmica</span>
            </a>
          </li>
          <li className="" id="Certificados">
            <a onClick={goToCertPage}>
              <ion-icon className='ion-icon' name="code-working-outline"></ion-icon>
              <span>Certificados</span>
            </a>
          </li>
          <li className="" id="Projetos">
            <a onClick={goToProjPage}>
              <ion-icon className='ion-icon' name="documents-outline"></ion-icon>
              <span>
                Projetos
              </span>
            </a>
          </li>
        </ul>
      </nav>
  )
}