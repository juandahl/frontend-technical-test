// Domain
import ConversationRepository from "domain/conversations/ConversationReposiory";
// Types
import { GetConversationsInput, Conversation, GetAllConversationsInput } from "types/conversation";
// Config
import config from "../../config";

const endpoint = "conversations";
const url = `${config.server.url}/${endpoint}`;

export class ApiConversationRepository implements ConversationRepository {
  async getAll(input: GetAllConversationsInput): Promise<Conversation[]> {
		const conversations = await fetch(`${url}/${input.UserId}`).then(response => response.json())

    return conversations;
	}
}

export default ApiConversationRepository;
