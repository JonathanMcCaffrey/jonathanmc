import { graphql } from 'gatsby';
import * as React from 'react';
import { ResumeDataQuery } from '../generated/graphql';
import styled from 'styled-components';
import Education from '../components/resume/education';
import Jobs from '../components/resume/jobs';
import PersonalInfo from '../components/resume/personalInfo';
import References from '../components/resume/references';
import Projects from '../components/resume/projects';
import Skills from '../components/resume/skills';

const showName = (data: ResumeDataQuery) => {
	return (
		<MainArea>
			<Name> {data.resume!.frontmatter!.fullname}</Name>
			<Position>{data.resume!.frontmatter!.Position}</Position>
		</MainArea>
	);
};

const ResumePage = (props: { data: ResumeDataQuery }) => {
	return (
		<Resume>
			<ResumeLeft>
				{showName(props.data)}
				<PersonalInfo data={props.data} />
				<Skills data={props.data} />
			</ResumeLeft>
			<ResumeRight>
				<Intro
					dangerouslySetInnerHTML={{
						__html: props.data.resume!.html!
					}}
				/>
				<Jobs data={props.data} />
				<Education data={props.data} />
			</ResumeRight>
			<ResumeContent>
				<References data={props.data} />
				<Projects data={props.data} />
			</ResumeContent>
		</Resume>
	);
};

export default ResumePage;

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

	li {
		margin-bottom: 4px;
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
	margin-top: 24px;
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

const Intro = styled.div`
	padding: 4px 2px 0px 8px;
	font-size: 0.8rem;
	margin-bottom: -25px;
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
			sort: { fields: frontmatter___order, order: DESC }
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
						order
					}
				}
			}
		}
		projects: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/.*/resume/projects/.*/" } }
			sort: { fields: frontmatter___order, order: DESC }
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
						order
					}
				}
			}
		}
		references: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/.*/resume/references/.*/" } }
			sort: { fields: frontmatter___order, order: DESC }
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
						order
					}
				}
			}
		}
	}
`;
