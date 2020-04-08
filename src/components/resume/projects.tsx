import * as React from "react";
import { ResumeDataQuery } from "../../generated/graphql";
import styled from "styled-components";
import { Section } from ".";

const Projects = (props: { data: ResumeDataQuery }) => {
  return (
    <>
      <Section>Projects</Section>
      <ProjectGrid>
        {props.data.projects!.edges.map((element) => {
          return (
            <ProjectBlock>
              <ProjectLeft>
                <ProjectPeriod>
                  {element.node.frontmatter!.period}
                </ProjectPeriod>
              </ProjectLeft>
              <ProjectRight>
                <ProjectName>{element.node.frontmatter!.project}</ProjectName>
                <ProjectItalic>
                  {element.node.frontmatter!.projectDetails}
                </ProjectItalic>
                <TechnologyBold>Roles:</TechnologyBold>
                <ProjectText>{element.node.frontmatter!.roles}</ProjectText>
              </ProjectRight>
              <ProjectContent>
                <TechnologyBold>Technology: </TechnologyBold>
                <TechnologyText>
                  {element.node.frontmatter!.Technology}
                </TechnologyText>
              </ProjectContent>
            </ProjectBlock>
          );
        })}
      </ProjectGrid>
    </>
  );
};

export default Projects;

const ProjectGrid = styled.div`
  padding: 5px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const ProjectBlock = styled.div`
  padding: 1px;
  margin: 1px;
  display: grid;
  grid-template-columns: 1fr 1px 8fr;
  grid-template-areas:
    "ProjectLeft . ProjectRight"
    "ProjectContent ProjectContent ProjectContent";
`;

const ProjectLeft = styled.div`
  grid-area: ProjectLeft;
`;

const ProjectContent = styled.div`
  grid-area: ProjectContent;
  padding-left: 2px;
`;

const ProjectRight = styled.div`
  grid-area: ProjectRight;
`;

const ProjectPeriod = styled.div`
  color: rgb(50, 50, 50);
  font-size: 0.7rem;
  font-weight: 200;
  font-style: italic;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
`;

const ProjectName = styled.div`
  font-weight: 500;
  font-size: 0.7rem;
`;

const ProjectText = styled.div`
  font-size: 0.6rem;
  display: inline-block;
  padding: 0px 5px;
`;

const ProjectItalic = styled.div`
  font-size: 0.6rem;
  font-style: italic;
`;

const TechnologyText = styled.div`
  font-size: 0.6rem;
  display: inline-block;
  margin-bottom: 4px;
`;

const TechnologyBold = styled.div`
  font-weight: 500;
  display: inline-block;
  padding-right: 4px;
  font-size: 0.65rem;
  margin-bottom: 4px;
`;
