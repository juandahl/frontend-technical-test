import React from "react";
import { useRouter } from "next/router";

// Components
import Chat from "components/business/chat";
// Infraestructure
import ApiMessageRepository from "infraestructure/messages/MessageRepository";
// Utils
import { getLoggedUserId } from "utils/getLoggedUserId";
// Types
import { Message } from "types/message";

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
    <Chat
      messageRepository={messageRepository}
      conversationId={conversationId}
      userId={userId}
    />
  )
}

export default ConversationDetails;
