import Link from "next/link";
import styled from "styled-components";
// Styles
import { radius } from "styles/border";
import { colors } from "styles/colors";
import { spacing } from "styles/spacing";

export const Container = styled(Link)`
	display: flex;
	border: 1px solid ${colors.borderUserCard};
	border-radius: ${radius.large};
	padding: ${spacing.sm};
	box-shadow: 0px 0px 2px 1px ${colors.boxShadowUserCard};
	gap: ${spacing.xs};
`;

export const DataSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
`;
