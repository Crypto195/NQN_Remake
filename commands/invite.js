  
const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "Invite link",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite me!`)
    .setDescription(`[Invite Link](https://discord.com/api/oauth2/authorize?client_id=+`Client.user.id`+permissions=8&scope=bot) | [Github Link](https://github.com/Crypto195/NQN_Remake)`)
    .setColor("RANDOM")
    .setFooter(`Bot by Crypto`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
    
  
  }
}
