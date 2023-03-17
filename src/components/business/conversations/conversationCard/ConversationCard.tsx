// Components
import CustomAvatar from "components/shared/customAvatar";
import React from "react";
// Types
import { Conversation } from "types/conversation";
// Utils
import { getInitialsFromFullName } from "utils/getInitialsFromFullName";

// Styles
import { Container, DataSection } from "./styles";

interface ConversationCardProps {
	conversation: Conversation;
	userId: number;
}

const ConversationCard: React.FC<ConversationCardProps> = ({ conversation, userId }) => {
	// Variables
	const userName =
		conversation.senderId === userId ? conversation.recipientNickname : conversation.senderNickname;
	const lastMessageDate = new Date(Date.now() - conversation.lastMessageTimestamp);

	return (
		<Container href={`/${conversation.id}`}>
			<CustomAvatar>{getInitialsFromFullName(conversation.senderNickname)}</CustomAvatar>

			<DataSection>
				<div>{userName}</div>
				<div>{lastMessageDate.toLocaleTimeString()}</div>
			</DataSection>
		</Container>
	);
};

export default ConversationCard;
