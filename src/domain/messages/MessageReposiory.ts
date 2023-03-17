import { GetAllMessagesInput, Message } from "types/message";

interface MessageRepository {
	getAll(input: GetAllMessagesInput): Promise<Message[]>;
}

export default MessageRepository;
