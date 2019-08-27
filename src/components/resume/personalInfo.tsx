import * as React from 'react';
import { ResumeDataQuery } from '../../generated/graphql';
import styled from 'styled-components';
import { SideSection } from '.';

const PersonalInfo = (props: { data: ResumeDataQuery }) => {
	return (
		<>
			<SideSection>Personal Info</SideSection>
			<InfoArea>
				<InfoLabel>Address</InfoLabel>
				<InfoText> {props.data.resume!.frontmatter!.Address}</InfoText>
				<InfoLabel>Phone </InfoLabel>
				<InfoText>{props.data.resume!.frontmatter!.Phone}</InfoText>
				<InfoLabel>Email </InfoLabel>
				<InfoText>{props.data.resume!.frontmatter!.Email}</InfoText>
				<InfoLabel>WWW </InfoLabel>
				<InfoText>{props.data.resume!.frontmatter!.WWW}</InfoText>
				<InfoLabel>LinkedIn </InfoLabel>
				<InfoText>{props.data.resume!.frontmatter!.LinkedIn}</InfoText>
				<InfoLabel>GitHub </InfoLabel>
				<InfoText>{props.data.resume!.frontmatter!.GitHub}</InfoText>
				<InfoLabel>Facebook</InfoLabel>
				<InfoText> {props.data.resume!.frontmatter!.Facebook}</InfoText>
			</InfoArea>
		</>
	);
};

export default PersonalInfo;

const InfoLabel = styled.div`
	font-weight: 700;
	font-size: 0.75rem;
`;
const InfoText = styled.div`
	padding-bottom: 8px;
	font-size: 0.8rem;
	word-break: break-all;
`;
const InfoArea = styled.div`
	padding: 10px;
`;
