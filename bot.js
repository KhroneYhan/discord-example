const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.lNTM4MzA3MDMyMDQ3MTU3MjQ5.XaWwNQ.naN6c16l25CssiLp9IAU8LArgag);//where BOT_TOKEN is the token of our bot 
