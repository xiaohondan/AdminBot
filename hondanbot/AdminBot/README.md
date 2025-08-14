# AdminBot - 猫娘机器人项目

## 项目简介
AdminBot是一个基于QQ的猫娘机器人，旨在为用户提供有趣的互动体验。该机器人能够根据用户的消息生成猫娘相关的回复。

## 文件结构
```
AdminBot
├── src
│   ├── bot.ts               # 机器人的主入口，负责初始化机器人并处理消息事件
│   ├── config.ts            # 包含机器人的配置选项，例如QQ号、API密钥等
│   ├── services
│   │   └── catgirlService.ts # 导出CatgirlService类，生成猫娘相关的回复
│   └── types
│       └── index.ts         # 定义消息和响应的类型
├── scripts
│   └── start.bat            # 启动脚本，用于在Windows环境下启动机器人
├── package.json              # npm的配置文件，列出项目的依赖项和脚本
├── tsconfig.json             # TypeScript的配置文件，指定编译选项和要包含的文件
└── README.md                 # 项目的文档，介绍如何安装和使用猫娘机器人
```

## 安装
1. 克隆项目到本地：
   ```
   git clone https://github.com/xiaohhondan/AdminBot.git
   ```
2. 进入项目目录：
   ```
   cd AdminBot
   ```
3. 安装依赖：
   ```
   npm install
   ```

## 使用
1. 配置机器人：
   - 编辑`src/config.ts`文件，填写你的QQ号和API密钥等信息。
   
2. 启动机器人：
   - 在Windows环境下，双击`scripts/start.bat`文件，或在命令行中运行：
     ```
     scripts/start.bat
     ```

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
该项目遵循MIT许可证。