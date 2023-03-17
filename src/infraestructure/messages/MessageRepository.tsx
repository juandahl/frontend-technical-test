// Domain
import MessageRepository from "domain/messages/MessageReposiory";
// Types
import { Message, GetAllMessagesInput } from "types/message";
// Config
import config from "../../config";

const endpoint = "messages";
const url = `${config.server.url}/${endpoint}`;

export class ApiMessageRepository implements MessageRepository {
  async getAll(input: GetAllMessagesInput): Promise<Message[]> {
    try {
      const response = await fetch(`${url}/${input.conversationId}`);
      const messages = await response.json();
      return messages;
    } catch(e) {
      console.log(e);
    }

    return [];
	}
}

export default ApiMessageRepository;
