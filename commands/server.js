module.exports = {
	name: 'server',
	description: 'Server info!',
	guildOnly: true,
	execute(message) {
		message.channel.send(
			`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`,
		);
	},
};
