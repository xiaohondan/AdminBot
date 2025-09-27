# AdminBot - Catgirl Bot Project
<a href="https://trendshift.io/repositories/12875" target="_blank"><img src="https://trendshift.io/api/badge/repositories/12875" alt="Soulter%2FAstrBot | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

<a href="https://www.duitang.com/blog/?id=1385717149" src="https://pd.qq.com/s/gqbtcp13tQQ-3815099625-purple?style=for-the-badge&color=76bad9"></a>
<a href="https://github.com/xiaohondan/AdminBot/blob/main/README.md">简体中文</a>
<a href="https://github.com/xiaohondan/AdminBot/blob/main/README_en.md">English</a> ｜
<a href="https://github.com/xiaohondan/AdminBot/blob/main/README_ja.md">日本語</a> ｜
## Project Introduction
AdminBot is a catgirl bot based on QQ, designed to provide users with fun interactive experiences. This bot can generate catgirl-related responses based on user messages.
## File Structure
```
AdminBot
├── src
│   ├── bot.ts               # Main entry point of the bot, responsible for initializing the bot and handling message events
│   ├── config.ts            # Contains the bot's configuration options, such as QQ number, API keys, etc.
│   ├── services
│   │   └── catgirlService.ts # Exports the CatgirlService class, which generates catgirl-related responses
│   └── types
│       └── index.ts         # Defines message and response types
├── scripts
│   └── start.bat            # Startup script for launching the bot in Windows environment
├── package.json              # npm configuration file listing project dependencies and scripts
├── tsconfig.json             # TypeScript configuration file specifying compilation options and files to include
└── README.md                 # Project documentation explaining how to install and use the catgirl bot
```
## Installation
1.Clone the project locally:
git clone https://github.com/xiaohondan/AdminBot.git
2.Enter the project directory:
cd AdminBot
3.Install dependencies:
npm install
## Usage
Configure the bot:

Edit the src/config.ts file and fill in your QQ number, API keys, and other information.

Start the bot:

On Windows, double-click the scripts/start.bat file, or run in the command line:
scripts/start.bat
## Contribution
Any form of contribution is welcome! Please submit issues or pull requests.

## License
This project follows the MIT License.
