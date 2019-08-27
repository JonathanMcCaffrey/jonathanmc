import * as React from 'react';
import { ResumeDataQuery } from '../../generated/graphql';
import styled from 'styled-components';
import { Section } from '.';

const References = (props: { data: ResumeDataQuery }) => {
	return (
		<>
			<Spacer></Spacer>
			<Section>References</Section>
			{props.data.references!.edges.map(element => {
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
					</>
				);
			})}
		</>
	);
};

export default References;

const Spacer = styled.div`
	padding: 20px;
`;

const ReferenceName = styled.div`
	font-weight: 700;
	display: inline-block;
`;
const ReferenceTitle = styled.div`
	font-size: 0.85rem;
	display: inline-block;
	padding-left: 5px;
	margin-bottom: -12px;
`;
const ReferenceQuote = styled.div`
	padding: 10px;
	margin-top: -12px;
`;
