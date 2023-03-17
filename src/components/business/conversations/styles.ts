import styled from "styled-components";
import { spacing } from "styles/spacing";

export const Container = styled.ul`
	display: flex;
	gap: ${spacing.sm};
	flex-direction: column;
	padding: ${spacing.sm} ${spacing.tiny};
`;

export const ListItem = styled.li`
	list-style: none;
	padding: 0px;
`;
