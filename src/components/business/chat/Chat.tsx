import React from "react";
// Types
import { Message } from "types/message";
// Infraestructure
import ApiMessageRepository from "infraestructure/messages/MessageRepository";
// Styles
import { Container, ListItem } from "./styles";
// Components
import MessageCard from "./messageCard";

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
    messageRepository.getAll({ conversationId }).then(allMessages => setMessages(allMessages))
  }, [conversationId, messageRepository]);

  return (
    <Container>
      {messages.map(message => (
        <ListItem key={message.id} itsMe={message.authorId === userId}>
          <MessageCard message={message} userId={userId} />
        </ListItem>
      ))}
    </Container>
)}

export default Chat;
