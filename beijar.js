const Discord = require("discord.js");

exports.run = async (cleint, message, args) => {

    var list = [
        'https://i.imgur.com/sGVgr74.gif'

    ];

    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
    return message.reply('Lembre-se de mencionar um usuário válido!!!');
    }

    //message.channel.send(`${message.author.username} **Beijou o(a)** ${user.username} :heart:`, {files:
    // [rand]});

   let avatar = message.author.displayAvatarURL({format: "png"});
    const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${message.author} beijou ${user}! :heart:`)
            .setImage(rand)
            .setTimestamp()
            .setThumbnail(avatar)
            .setFooter("Own ;3")
            await message.channel.send(embed);

    }

exports.help = {
    name: "beijar.js"
}