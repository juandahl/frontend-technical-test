// Domain
import ConversationRepository from "domain/conversations/ConversationReposiory";
// Types
import { Conversation, GetAllConversationsInput } from "types/conversation";

// Config
import config from "../../config";

const endpoint = "conversations";
const url = `${config.server.url}/${endpoint}`;

export class ApiConversationRepository implements ConversationRepository {
	async getAll(input: GetAllConversationsInput): Promise<Conversation[]> {
		const response = await fetch(`${url}/${input.UserId}`);
		const conversations = (await response.json()) as Conversation[];

		return conversations;
	}
}

export default ApiConversationRepository;
