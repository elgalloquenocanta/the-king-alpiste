scconst express = require('express');
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
  if (msg.content ==='g!muero') {
    msg.reply('Has muerto, https://tenor.com/view/rip-coffin-black-ghana-celebrating-gif-16743302');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!revivir') {
    msg.reply('Has revivido https://tenor.com/view/jesus-christ-gif-11388596');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!alpiste') {
    msg.reply('Has dado de comer al Gallo https://tenor.com/view/rooster-running-away-im-chasing-chase-gif-13982441');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!explotar') {
    msg.reply('Has explotado, https://tenor.com/view/minecraft-jesus-gif-9643705');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!crush') {
    msg.reply('Enhorabuena, tu crush te ha besado ❤️  https://tenor.com/view/milk-and-mocha-love-kiss-cute-kawaii-gif-12535181');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!dentista') {
    msg.reply('Has ido al dentista 🦷 https://tenor.com/view/mr-bean-dentist-funny-gif-15484065');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!burger') {
    msg.reply('Has comido una hamburguesa 🍔https://tenor.com/view/mcdonalds-oh-yeah-happy-dance-peace-gif-15790119');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!rana') {
    msg.reply(' Kermit baila duro, en su casa 🐸https://tenor.com/view/kermit-dance-dance-moves-slow-dance-grooves-gif-16592599');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!staff') {
    msg.reply('Para hablar con Staff crea un ticket con @Señor Ticket en el canal #『🌈𝕤𝕥𝕒𝕗𝕗🌈』');
  }
});

client.on('message', msg => {
  if (msg.content ==='g!baila') {
    msg.reply('¡Que bien bailas!, https://tenor.com/view/cookie-monster-kooky-silly-cute-happy-gif-11561007');
  }
});

client.on('message', msg => {
  if (msg.content.startsWith("g!discord.js")){
    const embed = new Discord.MessageEmbed()
    .setTitle("The King Alpiste g!")
    .setDescription("BOT OFICIAL DE EL GALLO QUE NO CANTA")
    .setThumbanil("https://discordapp.com/channels/718464829014147155/719819464723398756/742538675681755146")
    .addField("Version", "1.0.0")
    .addField("GitHub", "1.0.0")
    .addField("Version", "1.0.0")
    .addField("Version", "1.0.0")



    msg.reply('¡Que bien bailas!, https://tenor.com/view/cookie-monster-kooky-silly-cute-happy-gif-11561007');
  }
});

client.login(process.env.DISCORD_TOKEN);