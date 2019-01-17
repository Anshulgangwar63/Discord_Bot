const discord = require("discord.js");
const token = "";
const bot = new discord.Client();

bot.on("ready",function(){
    console.log("Ready");
});

bot.on("message",function(message){
    console.log(message.content);
    if(message.content === "!bot")
    {
        message.channel.send(`${message.author.avatarURL} ${message.author} HI! there`);
    }
});


bot.login(token);