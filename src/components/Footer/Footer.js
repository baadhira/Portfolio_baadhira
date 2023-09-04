import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BoxNum, BoxText, Boxes } from '../Acomplishments/AcomplishmentsStyles';
import Button from '../../styles/GlobalComponents/Button';

const Footer = () => {
  return (
    <>
    <Section>
    <SectionTitle>
    Get In Touch
    </SectionTitle>
    <SectionText>
    Whether you have a question or just want to say hi, I’ll try my best to get back to you!</SectionText>
    <Button onClick={()=>window.location='mailto:bee@gmail.com'}>
    
      Say Hi
      </Button>
  </Section>
    
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/baadhira"/>
      <AiFillGithub size="3rem"/>

      <SocialIcons href="https://www.linkedin.com/in/baadhira/"/>
      <AiFillLinkedin size="3rem"/>

      <SocialIcons href="https://instagram.com"/>
      <AiFillInstagram size="3rem"/>
      </SocialContainer>
    </SocialIconsContainer></>
  );
};

export default Footer;
