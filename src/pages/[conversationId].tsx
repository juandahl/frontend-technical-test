// Components
import Chat from "components/business/chat";
// Infraestructure
import ApiMessageRepository from "infraestructure/messages/MessageRepository";
import { useRouter } from "next/router";
import React from "react";
// Types
import { Message } from "types/message";
// Utils
import { getLoggedUserId } from "utils/getLoggedUserId";

interface ConversationDetailsProps {
	messages: Message[];
}

const messageRepository = new ApiMessageRepository();

const ConversationDetails: React.FC<ConversationDetailsProps> = () => {
	// Hooks
	const router = useRouter();
	const userId = getLoggedUserId();

	// Params
	const conversationId = +router.query.conversationId;

	return (
		<Chat messageRepository={messageRepository} conversationId={conversationId} userId={userId} />
	);
};

export default ConversationDetails;
