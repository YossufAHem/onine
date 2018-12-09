const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});

  
client.on('message', msg => {
  if (msg.content === '$ping') {
   msg.reply('عزيزي الكريم يوسف ليس موجود الحين اتنظر شوي لان يوسف في مشوارhttps://cdn.pg.sa/FXUxrKyI4g.gif');
  }
});

client.login(process.env.BOT_TOKEN);
