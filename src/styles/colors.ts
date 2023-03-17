/* eslint-disable camelcase */
const grey_000 = "#fafafa";
const grey_100 = "#CFCFCF";
const grey_200 = "#A5A5A5";
const grey2 = "rgba(196,186,186,0.86)";

const lightBlue = "#25537e";
const blue = "#25537e";
const blue_100 = "#84C1FF";

/**
 * Palette with semantic to simplify refactoring and clarify which color is used for each implementation
 */
export const colors = {
	// UserCard
	borderUserCard: grey_000,
	boxShadowUserCard: grey2,
	// Avatar
	avatarbackground: lightBlue,
	avatarBorder: blue,
	// Message Card
	backgroundMessageCard: grey_100,
	backgroundReceivedMessageCard: blue_100,
} as const;
