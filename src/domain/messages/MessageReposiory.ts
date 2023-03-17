import { Message, GetAllMessagesInput } from "types/message";

interface MessageRepository {
	getAll(input: GetAllMessagesInput): Promise<Message[]>;
}

export default MessageRepository;
