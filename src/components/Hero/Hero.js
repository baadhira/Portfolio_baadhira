import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        {/* Welcome !!!  */}
        Hi there!
        <br/>
      </SectionTitle>
      <SectionText>
      {/* Frontend React Developer | Crafting Engaging Web Experiences | Turning Ideas into Code */}
      {/* " I'm Badira, a passionate frontend React developer dedicated to bringing web applications to life. 
      I specialize in creating seamless and interactive user interfaces that captivate and engage.  */}
      I build things for the web.
I’m an experienced software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Arab Bank.
      {/* With a deep love for React and a penchant for turning innovative ideas into elegant code, I'm here to show you the power of web development done right. */}
      </SectionText>
      {/* <Button onClick={()=>window.location='https://google.com'}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;