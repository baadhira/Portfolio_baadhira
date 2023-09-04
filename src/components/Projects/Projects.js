import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree,HeaderFour, Hr, Tag, TagList, TitleContent, UtilityList, Img,HeaderFive } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects,projectWork } from '../../constants/constants';

const projectsDemo=[0,1,2,3,4,5]
const Projects = () => (
  <Section nopadding id="experiences">
    <SectionDivider/>
    <SectionTitle main>Where I’ve Worked</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit,role,head1,date})=>(
        <BlogCard key={id}>
          {/* <Img src={image}/> */}
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            {/* <Hr/> */}
            <HeaderFour title>{role}</HeaderFour>
            <HeaderFive>{date}</HeaderFive>
            <Hr/>
          </TitleContent>
          <CardInfo>{head1}</CardInfo>
          <div>
            {/* <TitleContent>Stack </TitleContent> */}
            {/* <ol>
              <li><TagList>1. Shopify e-commerce <a  target="_blank"href="https://github.com/baadhira/shopify-ecommerce">Code</a> </TagList></li>
              <li><TagList>2. Jobbee Job Portal <a  target="_blank"href="https://github.com/baadhira/Jobbee-Job-Portal">Code</a> </TagList></li>

              <li>&nbsp;3. Greenland e-commerce <a  target="_blank"href="https://github.com/baadhira/Greenland-ecommerce">&nbsp;&nbsp;&nbsp;Code</a> </li>

              <li>4. Backpackers &nbsp;&nbsp;<a  target="_blank"href="https://github.com/baadhira/backend_backpackers">Backend</a>&nbsp;&nbsp;&nbsp;<a  target="_blank"href="https://github.com/baadhira/backpackers-frontend-sample">Frontend</a> </li>


            </ol> */}
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {/* <ExternalLinks href={visit}>Code</ExternalLinks> */}
            {/* <ExternalLinks href={source}>Source</ExternalLinks> */}

          </UtilityList>
        </BlogCard>
      ))}


    </GridContainer>
  </Section>
);

export default Projects;