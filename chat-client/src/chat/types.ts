interface IChatConfig {
    chatId: string;
    chatName: string;
    initMessage: string;
}

type TChatMessage = {
    content: string;
    author: string;
}


export type {
    IChatConfig,
    TChatMessage,
}
