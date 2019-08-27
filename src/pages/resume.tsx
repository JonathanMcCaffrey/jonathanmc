import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../layouts';
import { ResumeDataQuery } from '../generated/graphql';
import styled from 'styled-components';

const showJobs = (data: ResumeDataQuery) => {
	return data.jobs.edges.map(element => {
		return (
			<JobBlock>
				<LeftJob>
					<Text>{element.node.frontmatter!.period}</Text>
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

const ResumePage = (props: { data: ResumeDataQuery }) => {
	return (
		<Resume>
			<Section>Experience</Section>
			{showJobs(props.data)}
		</Resume>
	);
};

export default ResumePage;

const Resume = styled.div`
	background-color: rgb(244, 244, 244);
	width: 100%;

	*,
	*:before,
	*:after {
		color: black;
	}
`;

const Section = styled.div`
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	font-size: 1.2rem;
	font-weight: 600;
`;

const MainRole = styled.div`
	color: black;
	font-size: 1.2rem;
	font-weight: 600;
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
	padding: 20px;
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

const Text = styled.div``;

export const pageQuery = graphql`
	query Resume {
		site {
			siteMetadata {
				siteName
			}
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
