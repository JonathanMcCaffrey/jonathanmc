import * as React from 'react';
import { ResumeDataQuery } from '../../generated/graphql';
import styled from 'styled-components';
import { Section } from '.';

const Education = (props: { data: ResumeDataQuery }) => {
	return (
		<>
			<Section>Education and Conferences</Section>
			<Text>{props.data.resume!.frontmatter!.Education}</Text>
			{props.data.resume!.frontmatter!.Conferences!.map(element => {
				return <Text>{element}</Text>;
			})}
		</>
	);
};

export default Education;

const Text = styled.div`
	padding: 2px 4px;
	font-size: 0.75rem;
`;
