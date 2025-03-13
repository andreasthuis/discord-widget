const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activities: [{ name: "your messages" }], status: "online" });
});

client.login(process.env.DISCORD_BOT_TOKEN);
