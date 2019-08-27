import { graphql } from 'gatsby';
import * as React from 'react';
import { ResumeDataQuery } from '../generated/graphql';
import styled from 'styled-components';

const showJobs = (data: ResumeDataQuery) => {
	return data.jobs.edges.reverse().map(element => {
		return (
			<JobBlock>
				<LeftJob>
					<Period>{element.node.frontmatter!.period}</Period>
				</LeftJob>
				<RightJob>
					<MainRole>{element.node.frontmatter!.mainrole}</MainRole>
					<Company>{element.node.frontmatter!.company}, </Company>
					<CompanyDetails>
						{element.node.frontmatter!.companyDetails}
					</CompanyDetails>
				</RightJob>
				<ContentJob>
					<JobInfo
						dangerouslySetInnerHTML={{ __html: element.node.html! }}
					/>
				</ContentJob>
			</JobBlock>
		);
	});
};

const showEducation = (data: ResumeDataQuery) => {
	return <Text>{data.resume!.frontmatter!.Education}</Text>;
};

const showConferences = (data: ResumeDataQuery) => {
	return (
		<>
			{data.resume!.frontmatter!.Conferences!.map(element => {
				return <Text>{element}</Text>;
			})}
		</>
	);
};

const showReferences = (data: ResumeDataQuery) => {
	return (
		<Text>
			{data.references!.edges.map(element => {
				return (
					<>
						<ReferenceName>
							{element!.node.frontmatter!.fullname},
						</ReferenceName>
						<ReferenceTitle>
							{element!.node.frontmatter!.title}
						</ReferenceTitle>
						<ReferenceQuote>
							"{element!.node.frontmatter!.quote}"
						</ReferenceQuote>
						<Spacer />
					</>
				);
			})}
		</Text>
	);
};

const showProjects = (data: ResumeDataQuery) => {
	return (
		<ProjectGrid>
			{data.projects!.edges.map(element => {
				return (
					<ProjectBlock>
						<ProjectLeft>
							{element.node.frontmatter!.period}
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
							<Spacer></Spacer>
							<Spacer></Spacer>
						</ProjectContent>
					</ProjectBlock>
				);
			})}
		</ProjectGrid>
	);
};

const showName = (data: ResumeDataQuery) => {
	return (
		<MainArea>
			<Name> {data.resume!.frontmatter!.fullname}</Name>
			<Position>{data.resume!.frontmatter!.Position}</Position>
		</MainArea>
	);
};

const showPersonalInfo = (data: ResumeDataQuery) => {
	return (
		<InfoArea>
			<InfoLabel>Address</InfoLabel>
			<InfoText> {data.resume!.frontmatter!.Address}</InfoText>
			<InfoLabel>Phone </InfoLabel>
			<InfoText>{data.resume!.frontmatter!.Phone}</InfoText>
			<InfoLabel>Email </InfoLabel>
			<InfoText>{data.resume!.frontmatter!.Email}</InfoText>
			<InfoLabel>WWW </InfoLabel>
			<InfoText>{data.resume!.frontmatter!.WWW}</InfoText>
			<InfoLabel>LinkedIn </InfoLabel>
			<InfoText>{data.resume!.frontmatter!.LinkedIn}</InfoText>
			<InfoLabel>GitHub </InfoLabel>
			<InfoText>{data.resume!.frontmatter!.GitHub}</InfoText>
			<InfoLabel>Facebook</InfoLabel>
			<InfoText> {data.resume!.frontmatter!.Facebook}</InfoText>
		</InfoArea>
	);
};

const showSkills = (data: ResumeDataQuery) => {
	return (
		<Text>
			{data.resume!.frontmatter!.Skills!.map(element => {
				return <Skill>{element}</Skill>;
			})}
		</Text>
	);
};

const ResumePage = (props: { data: ResumeDataQuery }) => {
	return (
		<Resume>
			<ResumeLeft>
				{showName(props.data)}
				<SideSection>Personal Info</SideSection>
				{showPersonalInfo(props.data)}
				<SideSection>Skills</SideSection>
				{showSkills(props.data)}
			</ResumeLeft>
			<ResumeRight>
				<Text>{props.data.resume.frontmatter!.intro!}</Text>
				<Section>Experience</Section>
				{showJobs(props.data)}
				<Section>Education and Conferences</Section>
				{showEducation(props.data)}
				{showConferences(props.data)}
			</ResumeRight>
			<ResumeContent>
				{' '}
				<Section>References</Section>
				{showReferences(props.data)}
				<Section>Projects</Section>
				{showProjects(props.data)}
			</ResumeContent>
		</Resume>
	);
};

export default ResumePage;

const SideSection = styled.div`
	background-color: rgb(200, 200, 200);
	font-size: 1.1rem;
	font-weight: 500;
	padding: 10px;
`;

const Resume = styled.div`
	background-color: rgb(244, 244, 244);

	min-width: 21cm;
	min-height: 29.7cm;
	max-width: 21cm;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 3fr 0px 8fr;
	grid-template-rows: auto;
	grid-template-areas:
		'ResumeLeft . ResumeRight'
		'ResumeContent ResumeContent ResumeContent';

	*,
	*:before,
	*:after {
		color: black;

		font-size: 0.8rem;
	}
`;

const ResumeLeft = styled.div`
	grid-area: ResumeLeft;
	background-color: rgb(240, 240, 240);
`;

const ResumeRight = styled.div`
	grid-area: ResumeRight;
`;

const ResumeContent = styled.div`
	grid-area: ResumeContent;
	padding: 10px;
`;

const Section = styled.div`
	border-top: 2px solid rgb(200, 200, 200);
	border-bottom: 2px solid rgb(200, 200, 200);
	margin: 2px 0px;
	font-size: 1rem;
	font-weight: 600;
	padding: 2px 8px;
`;

const MainRole = styled.div`
	color: black;
	font-size: 1rem;
	font-weight: 600;
`;

const Period = styled.div`
	color: rgb(50, 50, 50);
	font-size: 0.8rem;
	font-weight: 200;
	font-style: italic;
	padding-left: 4px;
	padding-right: 4px;
	height: 100%;
`;

const Company = styled.div`
	color: rgb(40, 80, 40);
	font-size: 0.95rem;
	font-weight: 400;
	height: 100%;
	display: inline-block;
`;

const CompanyDetails = styled.div`
	display: inline-block;
	padding-left: 5px;
`;

const JobBlock = styled.div`
	padding: 2px;
	margin: 1px;
	display: grid;
	grid-template-columns: 1fr 8px 8fr;
	grid-template-rows: auto;
	grid-template-areas:
		'LeftJob . RightJob'
		'ContentJob ContentJob ContentJob';
`;

const LeftJob = styled.div`
	grid-area: LeftJob;
`;

const ContentJob = styled.div`
	grid-area: ContentJob;
	padding-top: 2px;
	padding-left: 2px;
`;

const RightJob = styled.div`
	grid-area: RightJob;
`;

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

const ProjectName = styled.div`
	font-weight: 500;
	font-size: 0.7rem;
`;

const ProjectText = styled.div`
	font-size: 0.65rem;
	display: inline-block;
`;

const ProjectTextBold = styled.div`
	font-weight: 500;
	display: inline-block;
	padding-right: 4px;
	font-size: 0.65rem;
`;

const Name = styled.div`
	padding-top: 5px;
	font-weight: 700;
	font-size: 1.02em;
`;
const Position = styled.div`
	padding-bottom: 10px;
	font-size: 1.05rem;
`;
const MainArea = styled.div`
	padding: 5px;
`;

const ReferenceName = styled.div`
	font-weight: 700;
	display: inline-block;
`;
const ReferenceTitle = styled.div`
	font-size: 0.85rem;
	display: inline-block;
	padding-left: 5px;
`;
const ReferenceQuote = styled.div`
	padding: 10px;
`;

const Spacer = styled.div`
	padding: 4px;
`;

const InfoLabel = styled.div`
	font-weight: 700;
`;
const InfoText = styled.div`
	padding-bottom: 8px;
	font-size: 0.85rem;
	word-break: break-all;
`;
const InfoArea = styled.div`
	padding: 10px;
`;

const Skill = styled.div`
	font-weight: 700;
	padding: 4px;
`;

const JobInfo = styled.div`
	padding: 1px 1px;
`;

const Text = styled.div`
	padding: 4px 8px;
	font-size: 0.8rem;
`;

export const pageQuery = graphql`
	query Resume {
		site {
			siteMetadata {
				siteName
			}
		}

		resume: markdownRemark(
			fileAbsolutePath: { regex: "/.*resume/resume.md/" }
		) {
			id
			frontmatter {
				intro
				Position
				fullname
				Address
				Phone
				Email
				WWW
				LinkedIn
				GitHub
				Facebook
				Skills
				FutureLearning
				Education
				Conferences
			}
			html
		}

		jobs: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/.*/resume/jobs/.*/" } }
		) {
			edges {
				node {
					id
					rawMarkdownBody
					html
					frontmatter {
						period
						mainrole
						company
						companyDetails
					}
				}
			}
		}
		projects: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/.*/resume/projects/.*/" } }
		) {
			edges {
				node {
					id
					rawMarkdownBody
					html
					frontmatter {
						quote
						project
						period
						via
						projectDetails
						roles
						Technology
						display
					}
				}
			}
		}
		references: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/.*/resume/references/.*/" } }
		) {
			edges {
				node {
					id
					rawMarkdownBody
					html
					frontmatter {
						title
						fullname
						quote
					}
				}
			}
		}
	}
`;
