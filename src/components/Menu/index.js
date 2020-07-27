import React from 'react';
import Logo from '../../assets/Imagens/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>
      <Button as="a" className="Button" href="/">Novo vídeo</Button>
    </nav>
  );
}

export default Menu;