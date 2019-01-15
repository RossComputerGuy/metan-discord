module.exports = {
	execute: (client,message,argv) => {
		argv['_'].shift();
		message.channel.send('Pong...').then(m => {
			message.reply('The delay is '+(m.createdTimestamp-message.createdTimestamp)+'ms. API Latency is '+Math.round(client.ping)+'ms.');
		});
	},
	metadata: {
		name: 'ping',
		description: 'Runs a latency check of Discord\'s API.',
		since: '0.0.1-prealpha'
	}
};
