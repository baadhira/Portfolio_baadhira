import React from 'react';
import { DiFirebase, DiReact, DiZend,DiJavascript, } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the web development world. From Back-end To Design , but currently working as frontend developer , I am including only the frontend technologies I have worked with </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>

React.js          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>

Javascript        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>

Typescript        </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>

Redux        </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
