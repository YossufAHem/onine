const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});


client.on('message', msg => {
  if (msg.content === 'هلا ') {
   msg.reply('**عزيزي الكريم يوسف ليس موجود الحين
اتنظر شوي لان يوسف في مشوار 
ازا مو مصدق اكتب هلا **
https://cdn.pg.sa/FXUxrKyI4g.gif
');
  }
});


client.login(process.env.BOT_TOKEN);
