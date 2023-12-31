import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{display:"flex",alignItems:"center",color:"white",marginBottom:"20px"}}>
          <DiCssdeck size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    
    </Div1>
    <Div2>
      <li>
        <a style={{color:"white"}} href="#experiences">
          <span>Experience</span>
        </a>
      </li>
      <li>
        <a style={{color:"white"}} href="#tech">
          <span>Technologies</span>
        </a>
      </li>
      <li>
        <a style={{color:"white"}} href="#about">
          <span>About</span>
        </a>
      </li>
    </Div2>
    <Div3>
      {/* <SocialIcons href="https://github.com/baadhira"/> */}
      <a style={{textDecoration:"none",color:"white"}} target="_blank"   href="https://github.com/baadhira">
      <AiFillGithub size="3rem"/>
      </a>

      {/* <SocialIcons href="https://www.linkedin.com/in/baadhira/"/> */}
      <a  style={{textDecoration:"none",color:"white"}}target="_blank"   href="https://github.com/baadhira">
      <AiFillLinkedin size="3rem"/>
      </a>

      {/* <SocialIcons href="https://instagram.com"/> */}
      <a style={{textDecoration:"none",color:"white"}} target="_blank"  href="https://instagram.com">
      <AiFillInstagram size="3rem"/>
      </a>
    </Div3>
  </Container>
);

export default Header;
