const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});

client1.on('ready', () => {
  console.log('bot online ');
});

client2.on('ready', () => {
  console.log('bot online ');
});

client3.on('ready', () => {
  console.log('bot online ');
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
