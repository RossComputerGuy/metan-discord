const commandLoader = require('./cmd-loader');
const Discord = require('discord.js');
const {readConfig} = require('./utils');
const yargsParser = require('yargs-parser');

const client = new Discord.Client();

client.on('message', message => {
	if (message.content.startsWith(readConfig().prefix) && !message.author.bot) {
		let args = yargsParser(message.content);
		if(args['_'].length < 1) return;
		try {
			commandLoader(args).execute(client,message,args);
		} catch(ex) {
			message.reply('The command failed to execute! Dumping error:\n```' + ex.stack + '\n```');
		}
	}
});

client.login(readConfig().login.token);
