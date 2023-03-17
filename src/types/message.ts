export interface Message {
	id: number;
	conversationId: number;
	authorId: number;
	timestamp: number;
	body: string;
}

export interface GetAllMessagesInput {
	conversationId: number;
}
