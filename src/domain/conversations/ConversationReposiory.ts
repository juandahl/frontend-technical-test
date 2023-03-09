import { GetConversationsInput, Conversation, GetAllConversationsInput } from "types/conversation";

interface ConversationRepository {
	getAll(input: GetAllConversationsInput): Promise<Conversation[]>;
}

export default ConversationRepository;
