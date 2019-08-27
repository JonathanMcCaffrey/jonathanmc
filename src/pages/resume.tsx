import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../layouts';
import { ResumeDataQuery } from '../generated/graphql';
import styled from 'styled-components';

const showJobs = (data: ResumeDataQuery) => {
	return data.jobs.edges.map(element => {
		return (
			<Block>
				<Text>{element.node.frontmatter!.company}</Text>
				<Text>{element.node.frontmatter!.period}</Text>
				<Text>{element.node.frontmatter!.mainrole}</Text>
				<Text>{element.node.frontmatter!.companyDetails}</Text>

				<div></div>
				<Text
					dangerouslySetInnerHTML={{ __html: element.node.html! }}
				/>
			</Block>
		);
	});
};

const ResumePage = (props: { data: ResumeDataQuery }) => {
	return <Layout>{showJobs(props.data)}</Layout>;
};

export default ResumePage;

const Block = styled.div`
	background-color: rgb(40, 40, 40);
	border: 1px rgb(80, 80, 80) solid;
	padding: 20px;
	margin: 40px auto;
	layout: block;
	width: 80vw;
`;

const Text = styled.p`
	color: white;
	width: 100%;
`;

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
