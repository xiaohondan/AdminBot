export interface Message {
    userId: string;
    content: string;
    timestamp: Date;
}

export interface Response {
    replyTo: string;
    content: string;
    timestamp: Date;
}