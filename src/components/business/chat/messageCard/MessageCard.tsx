import React from "react";
// Types
import { Message } from "types/message";

// Styles
import { Container, DataSection } from "./styles";

interface ConversationCardProps {
	message: Message;
	userId: number;
}

const ConversationCard: React.FC<ConversationCardProps> = ({ message, userId }) => {
	// Variables
	const itsMe = message.authorId === userId;

	return (
		<Container itsMe={itsMe}>
			<DataSection>{message.body}</DataSection>
		</Container>
	);
};

export default ConversationCard;
