// Components
import Conversations from "components/business/conversations/Coversations";
// Infraestructure
import ApiConversationRepository from "infraestructure/conversations/ConversationRepository";
import React from "react";
// Utils
import { getLoggedUserId } from "utils/getLoggedUserId";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const conversationReposiory = new ApiConversationRepository();

const Home: React.FC<HomeProps> = () => {
	const userId = getLoggedUserId();

	return <Conversations conversationRepository={conversationReposiory} UserId={userId} />;
};

export default Home;
