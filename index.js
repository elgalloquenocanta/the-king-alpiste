const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Yeah'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "Jugando a g!",
      type: "WATCHING"
    }
  });
}

client.on('ready', () => {
  console.log(`Logueado como ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'g!hello') {
    msg.reply('Hola, ¿que tal?');
  }
});

client.on('message', msg => {
  if (msg.content === 'g!youtube') {
    msg.reply('Este es el Youtube de Gallo https://www.youtube.com/channel/UCWVVf23GMM-kOl9220ZI3aA');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!dios') {
    msg.reply('Hola , eres dios');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!dios') {
    msg.reply('Hola , eres dios');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!dios') {
    msg.reply('Hola , eres dios');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!dios') {
    msg.reply('Hola , eres dios');
  }
});

client.login(process.env.DISCORD_TOKEN);