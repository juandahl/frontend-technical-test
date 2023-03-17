// Infraestructure
import ApiMessageRepository from "infraestructure/messages/MessageRepository";
import React from "react";
// Types
import { Message } from "types/message";

// Components
import MessageCard from "./messageCard";
// Styles
import { Container, ListItem } from "./styles";

interface ChatProps {
	conversationId: number;
	messageRepository: ApiMessageRepository;
	userId: number;
}

const Chat: React.FC<ChatProps> = ({ messageRepository, conversationId, userId }) => {
	// States
	const [messages, setMessages] = React.useState<Message[]>([]);

	// Effects
	React.useEffect(() => {
		messageRepository
			.getAll({ conversationId })
			.then((allMessages) => setMessages(allMessages))
			.catch((e) => console.error(e));
	}, [conversationId, messageRepository]);

	return (
		<Container>
			{messages.map((message) => (
				<ListItem key={message.id} itsMe={message.authorId === userId}>
					<MessageCard message={message} userId={userId} />
				</ListItem>
			))}
		</Container>
	);
};

export default Chat;
