const Discord = require("discord.js");
const client = new Discord.Client();
const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : YossiF `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("497896774967492616").join(); 
    });
	
	
	   client.on('message', msg => {
  if(msg.content === '!hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('.')
  }
})   

client.on('message', msg => {
  if (msg.content === 'هلا') {
   msg.reply('https://cdn.pg.sa/FXUxrKyI4g.gif');
  }
});

client1.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client1.on('ready', () => {
    client.channels.get("497896774967492616").join(); 
    });
	
	
	   client.on('message', msg => {
  if(msg.content === '!hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('.')
  }
})   

client1.on('message', msg => {
  if (msg.content === 'هلا') {
   msg.reply('https://cdn.pg.sa/FXUxrKyI4g.gif');
  }
});

client2.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client2.on('ready', () => {
    client.channels.get("497896774967492616").join(); 
    });
	
	
	   client.on('message', msg => {
  if(msg.content === '!hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('.')
  }
})   

client2.on('message', msg => {
  if (msg.content === 'هلا') {
   msg.reply('https://cdn.pg.sa/FXUxrKyI4g.gif');
  }
});

client2.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client2.on('ready', () => {
    client.channels.get("497896774967492616").join(); 
    });
	
	
	   client.on('message', msg => {
  if(msg.content === '!hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('.')
  }
})   

client2.on('message', msg => {
  if (msg.content === 'هلا') {
   msg.reply('https://cdn.pg.sa/FXUxrKyI4g.gif');
  }
});

client.login(process.env.BOT_TOKEN);
client1.login(process.env.BOT_TOKEN1);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
