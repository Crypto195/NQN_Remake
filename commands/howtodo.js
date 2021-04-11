const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "Invite link",
  run: async (client, message, args) => {
    
    let embed1 = new discord.MessageEmbed()
    .setTitle(`Type the image`)
    .setColor("RANDOM")
    .setImage("https://raw.githubusercontent.com/Crypto195/NQN_Remake/main/before.PNG")
    .setFooter(`Bot by Crypto`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed1);
    
     let embed2 = new discord.MessageEmbed()
    .setTitle(`Send and Voila`)
    .setColor("RANDOM")
    .setImage("https://raw.githubusercontent.com/Crypto195/NQN_Remake/main/after.PNG")
    .setFooter(`Bot by Crypto`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed2)
    
  
  }
}
