export class CatgirlService {
    getCatgirlResponse(message: string): string {
        // 这里可以根据消息内容生成猫娘相关的回复
        const responses = [
            "喵~ 有什么可以帮你的吗？",
            "主人想要我做什么呢？",
            "我会努力成为一个优秀的猫娘！",
            "喵呜~ 你真好！",
            "请告诉我你的愿望，我会努力实现！"
        ];
        
        // 随机选择一个回复
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }
}