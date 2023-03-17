import React from "react";

// Components
import Conversations from "components/business/conversations/Coversations";
// Infraestructure
import ApiConversationRepository from "infraestructure/conversations/ConversationRepository";
// Utils
import { getLoggedUserId } from "utils/getLoggedUserId";

interface HomeProps {
}

const conversationReposiory = new ApiConversationRepository();

const Home: React.FC<HomeProps> = () => {
  const userId = getLoggedUserId();

  return (
    <Conversations conversationRepository={conversationReposiory} UserId={userId} />
  )
}

export default Home;
