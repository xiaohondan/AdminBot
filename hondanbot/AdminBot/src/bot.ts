import { createBot, Context } from 'qq-bot-sdk';
import { config } from './config';
import { CatgirlService } from './services/catgirlService';

const bot = createBot({
    appId: config.appId,
    appKey: config.appKey,
    qq: config.qqNumber,
});

const catgirlService = new CatgirlService();

bot.on('message', async (ctx: Context) => {
    const message = ctx.message;

    if (message.type === 'text') {
        const response = await catgirlService.getCatgirlResponse(message.content);
        ctx.reply(response);
    }
});

bot.start();