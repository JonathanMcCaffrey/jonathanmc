import * as React from 'react';
import { ResumeDataQuery } from '../../generated/graphql';
import styled from 'styled-components';
import { Section } from '.';

const Projects = (props: { data: ResumeDataQuery }) => {
	return (
		<>
			<Section>Projects</Section>
			<ProjectGrid>
				{props.data.projects!.edges.map(element => {
					return (
						<ProjectBlock>
							<ProjectLeft>
								<ProjectPeriod>
									{element.node.frontmatter!.period}
								</ProjectPeriod>
							</ProjectLeft>
							<ProjectRight>
								<ProjectName>
									{element.node.frontmatter!.project}
								</ProjectName>
								<ProjectText>
									{element.node.frontmatter!.roles}
								</ProjectText>
								<ProjectText>
									{element.node.frontmatter!.projectDetails}
								</ProjectText>
							</ProjectRight>
							<ProjectContent>
								<ProjectTextBold>Technology: </ProjectTextBold>
								<ProjectText>
									{element.node.frontmatter!.Technology}
								</ProjectText>
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
`;

const ProjectBlock = styled.div`
	padding: 2px;
	margin: 1px;
	display: grid;
	grid-template-columns: 1fr 8px 8fr;
	grid-template-rows: auto;
	grid-template-areas:
		'ProjectLeft . ProjectRight'
		'ProjectContent ProjectContent ProjectContent';
`;

const ProjectLeft = styled.div`
	grid-area: ProjectLeft;
	height: 100%;
`;

const ProjectContent = styled.div`
	grid-area: ProjectContent;
	margin-top: -2px;
	padding-left: 2px;
`;

const ProjectRight = styled.div`
	grid-area: ProjectRight;
	height: 100%;
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
`;

const ProjectTextBold = styled.div`
	font-weight: 500;
	display: inline-block;
	padding-right: 4px;
	font-size: 0.65rem;
`;
