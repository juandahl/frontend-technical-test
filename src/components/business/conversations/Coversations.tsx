import React from "react";

// Domain
import ConversationRepository from "domain/conversations/ConversationReposiory";

// Types
import { Conversation } from "types/conversation";

// Internal Components
import ConversationCard from "./conversationCard";

// Styles
import { Container, ListItem } from "./styles";

interface ConversationsProps {
  conversationRepository: ConversationRepository;
  UserId: number;
}

const Conversations: React.FC<ConversationsProps> = ({ conversationRepository, UserId }) => {
  // States
  const [conversations, setConversations] = React.useState<Conversation[]>([]);

  // Effects
  React.useEffect(() => {
    conversationRepository.getAll({ UserId }).then(allConversations => setConversations(allConversations))
  }, [UserId, conversationRepository]);

return (
  <Container>
    {conversations.map(conversation => (
      <ListItem key={conversation.id}>
        <ConversationCard conversation={conversation} userId={UserId} />
      </ListItem>
    ))}
  </Container>
)}

export default Conversations;
