import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../layouts';
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
					<Text
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
		<Text>
			{data.resume!.frontmatter!.Conferences!.map(element => {
				return <Text>{element}</Text>;
			})}
		</Text>
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
			<ResumeHeader></ResumeHeader>
			<ResumeLeft>
				{showName(props.data)}

				<SideSection>Personal Info</SideSection>
				{showPersonalInfo(props.data)}
				<SideSection>Skills</SideSection>
				{showSkills(props.data)}
			</ResumeLeft>
			<ResumeRight>
				<Section>Experience</Section>
				{showJobs(props.data)}
				<Section>Education</Section>
				{showEducation(props.data)}
				<Section>Conferences</Section>
				{showConferences(props.data)}
				<Section>References</Section>
				<Section>Projects</Section>
			</ResumeRight>
		</Resume>
	);
};

export default ResumePage;

const SideSection = styled.div`
	background-color: rgb(200, 200, 200);
	font-size: 1.2rem;
	font-weight: 500;
	padding: 10px;
`;

const Resume = styled.div`
	background-color: rgb(244, 244, 244);
	width: 100%;

	display: grid;
	grid-template-columns: 2fr 20px 8fr;
	grid-template-rows: auto;
	grid-template-areas:
		'ResumeHeader ResumeHeader ResumeHeader'
		'ResumeLeft . ResumeRight';

	*,
	*:before,
	*:after {
		color: black;
	}
`;

const ResumeLeft = styled.div`
	grid-area: ResumeLeft;
`;

const ResumeRight = styled.div`
	grid-area: ResumeRight;
`;

const ResumeHeader = styled.div`
	grid-area: ResumeHeader;
`;

const Section = styled.div`
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	font-size: 1.2rem;
	font-weight: 600;
	padding: 10px;
`;

const MainRole = styled.div`
	color: black;
	font-size: 1.2rem;
	font-weight: 600;
`;

const Period = styled.div`
	color: rgb(50, 50, 50);
	font-size: 0.95rem;
	font-weight: 200;
	font-style: italic;
`;

const Company = styled.div`
	color: rgb(40, 80, 40);
	font-size: 1.1rem;
	font-weight: 400;

	display: inline-block;
`;

const CompanyDetails = styled.div`
	display: inline-block;
	padding-left: 5px;
`;

const JobBlock = styled.div`
	padding: 30px;
	margin: 30px;
	display: grid;
	grid-template-columns: 1fr 20px 8fr;
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
	padding-top: 10px;
	padding-left: 20px;
`;

const RightJob = styled.div`
	grid-area: RightJob;
`;

const Name = styled.div`
	font-weight: 700;
	font-size: 2rem;
`;
const Position = styled.div`
	padding-bottom: 30px;
	font-size: 1.2rem;
	margin: auto;
`;
const MainArea = styled.div`
	padding: 5px;
`;

const InfoLabel = styled.div`
	font-weight: 700;
`;
const InfoText = styled.div`
	padding-bottom: 30px;
	font-size: 0.85rem;
`;
const InfoArea = styled.div`
	padding: 10px;
`;

const Skill = styled.div`
	font-weight: 700;
	padding: 10px;
`;

const Text = styled.div`
	padding: 30px;
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
