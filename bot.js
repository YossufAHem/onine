const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});

client.on("message", message => {
	var prefix = "-";
 if (message.content === "هلا") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`**عزيزي الكريم يوسف ليس موجود الحين
اتنظر شوي لان يوسف في مشوار 
ازا مو مصدق اكتب هلا **
https://cdn.pg.sa/FXUxrKyI4g.gif`)
   message.channel.send(embed)   
    
   }
   }); 
  
client.login(process.env.BOT_TOKEN);
