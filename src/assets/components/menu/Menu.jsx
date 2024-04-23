import React, { useState } from 'react';
import * as H from './menu.styled';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <H.ContMenu>

     <H.Hamburguer onClick={toggleMenu}>
        <H.ListHamburguer isOpen={isOpen}></H.ListHamburguer>
        <H.ListHamburguer1 isOpen={isOpen}></H.ListHamburguer1>
        <H.ListHamburguer2 isOpen={isOpen}></H.ListHamburguer2>
      </H.Hamburguer>
      {isOpen && (
        <H.UlMenu>
          
          <H.LiMenu href="">Sobre Mim</H.LiMenu>
          <H.LiMenu href="">Minhas Tecnologias</H.LiMenu>
          <H.LiMenu href="">Projetos</H.LiMenu>
          <H.LiMenu href="">Contatos</H.LiMenu>
          
          
        </H.UlMenu>
      )}

     </H.ContMenu>
    </>
  );
}
