import React from "react";

import { Avatar } from "./styles";

interface CustomAvatarProps {
	children: React.ReactNode;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ children }) => {
	return <Avatar>{children}</Avatar>;
};

export default CustomAvatar;
