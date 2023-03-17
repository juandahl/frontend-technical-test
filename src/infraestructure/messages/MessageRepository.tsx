// Domain
import MessageRepository from "domain/messages/MessageReposiory";
// Types
import { GetAllMessagesInput, Message } from "types/message";

// Config
import config from "../../config";

const endpoint = "messages";
const url = `${config.server.url}/${endpoint}`;

export class ApiMessageRepository implements MessageRepository {
	async getAll(input: GetAllMessagesInput): Promise<Message[]> {
		try {
			const response = await fetch(`${url}/${input.conversationId}`);
			const messages: Message[] = (await response.json()) as Message[];

			return messages;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}

		return [];
	}
}

export default ApiMessageRepository;
