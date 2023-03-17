import styled from "styled-components";
// Styles
import { radius } from "styles/border";
import { colors } from "styles/colors";
import { spacing } from "styles/spacing";

export const Container = styled.div`
	border: 1px solid ${colors.borderUserCard};
	border-radius: ${radius.large};
	background: ${({ itsMe }: { itsMe: boolean }) =>
		itsMe ? colors.backgroundMessageCard : colors.backgroundReceivedMessageCard};
	padding: ${spacing.sm};
	gap: ${spacing.xs};
	width: fit-content;
`;

export const DataSection = styled.div`
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
`;
