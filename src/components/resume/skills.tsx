import * as React from 'react';
import { ResumeDataQuery } from '../../generated/graphql';
import styled from 'styled-components';
import { SideSection } from '.';

const Skills = (props: { data: ResumeDataQuery }) => {
	return (
		<>
			<SideSection>Skills</SideSection>
			{props.data.resume!.frontmatter!.Skills!.map(element => {
				return <Skill>{element}</Skill>;
			})}
		</>
	);
};

export default Skills;

const Skill = styled.div`
	font-weight: 600;
	padding-left: 8px;
	padding-bottom: 4px;
	padding-top: 2px;
`;
