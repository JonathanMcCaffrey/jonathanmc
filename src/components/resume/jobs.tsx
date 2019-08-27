import { graphql } from 'gatsby';
import * as React from 'react';
import { ResumeDataQuery } from '../../generated/graphql';
import styled from 'styled-components';
import { Section } from '.';

const Jobs = (props: { data: ResumeDataQuery }) => {
	return (
		<>
			<Section>Experience</Section>
			{props.data.jobs.edges.map(element => {
				return (
					<JobBlock>
						<JobLeft>
							<Period>{element.node.frontmatter!.period}</Period>
						</JobLeft>
						<JobRight>
							<MainRole>
								{element.node.frontmatter!.mainrole}
							</MainRole>
							<Company>
								{element.node.frontmatter!.company},{' '}
							</Company>
							<CompanyDetails>
								{element.node.frontmatter!.companyDetails}
							</CompanyDetails>
						</JobRight>
						<JobContent>
							<JobInfo
								dangerouslySetInnerHTML={{
									__html: element.node.html!
								}}
							/>
						</JobContent>
					</JobBlock>
				);
			})}
		</>
	);
};

export default Jobs;

const JobInfo = styled.div`
	padding: 1px 1px;
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

const JobLeft = styled.div`
	grid-area: LeftJob;
`;

const JobContent = styled.div`
	grid-area: ContentJob;
	padding-left: 2px;
	margin-bottom: -8px;
`;

const JobRight = styled.div`
	grid-area: RightJob;
`;
