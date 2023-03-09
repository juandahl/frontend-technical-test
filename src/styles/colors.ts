const grey = "#fafafa";
const grey2 = "rgba(196,186,186,0.86)";

const lightBlue = "#25537e"; 
const blue = "#25537e"; 

/**
 * Palette with semantic to simplify refactoring and clarify which color is used for each implementation
 */
export const colors = {
  // UserCard
  borderUserCard: grey,
  boxShadowUserCard: grey2,
  // Avatar
  avatarbackground: lightBlue,
  avatarBorder: blue,
} as const;