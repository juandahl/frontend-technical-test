export interface Conversation {
	id: number;
	recipientId: number;
	recipientNickname: string;
	senderId: number;
	senderNickname: string;
	lastMessageTimestamp: number;
}

export interface GetConversationsInput {
	UserId: number;
}

export interface GetAllConversationsInput {
	UserId: number;
}
