import { graphql } from 'gatsby';
import * as React from 'react';
import { ResumeDataQuery } from '../generated/graphql';
import styled, { createGlobalStyle } from 'styled-components';
import Education from '../components/resume/education';
import Jobs from '../components/resume/jobs';
import PersonalInfo from '../components/resume/personalInfo';
import References from '../components/resume/references';
import Projects from '../components/resume/projects';
import Skills from '../components/resume/skills';
import { Section } from '../components/resume';

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
		<Page>
			<Resume>
				<ResumeLeft>
					{showName(props.data)}
					<PersonalInfo data={props.data} />
					<Skills data={props.data} />
				</ResumeLeft>
				<ResumeRight>
					<Section>Summary</Section>
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

			<GlobalStyle />
		</Page>
	);
};

export default ResumePage;

var pageHeight = '660px';

const GlobalStyle = createGlobalStyle`
  html {
		background-color: rgb(250, 250, 250);
	}
`;

const Page = styled.div`
	height: 2100px;
`;

const Resume = styled.div`
	background-color: rgb(250, 250, 250);

	min-width: 21cm;
	max-width: 21cm;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 3fr 0px 8fr;
	grid-template-areas:
		'ResumeLeft . ResumeRight'
		'ResumeContent ResumeContent ResumeContent';

	*,
	*:before,
	*:after {
		color: black;
		font-size: 0.73rem;
	}

	li {
		margin-bottom: 4px;
	}
`;

const ResumeLeft = styled.div`
	grid-area: ResumeLeft;
	background-color: rgb(245, 245, 245);
	padding-bottom: 30px;
`;

const ResumeRight = styled.div`
	grid-area: ResumeRight;
	height: ${pageHeight};
	padding-top: 12px;
`;

const ResumeContent = styled.div`
	grid-area: ResumeContent;
	height: ${pageHeight};
`;

const Name = styled.div`
	padding-top: 5px;
	padding-left: 2px;
	font-weight: 700;
	font-size: 1.1em;
`;
const Position = styled.div`
	padding-bottom: 10px;
	font-size: 1.05rem;
`;
const MainArea = styled.div`
	padding: 5px;
`;

const Intro = styled.div`
	padding: 10px;

	//	padding: 8px 10px 4px 10px;
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
