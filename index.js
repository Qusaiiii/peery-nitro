const Discord = require('discord.js');
const client = new Discord.Client();
const cleverbot = require("cleverbot.io");
const bot = new cleverbot('ShIpPW03HePeDWes','ufEBCAEUWxeHnwuKrTZt5aUWjT0rN4Ir');



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "!"

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "433198762706599936") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});

bot.create(function (err, session) {
  bot.setNick(session);
  client.on("message", function(message) {
    var { mentions, content, author, guild, channel, reply} = message
    if (author.bot) return;
      if (guild) {
      let users = mentions.users;
      if (!users) return;
      let first = users.first();
      if(!first) return;
      if (first.id != client.user.id) return;
      message.channel.startTyping();
      content = content.replace(/<@.*?>/g, "")
      bot.ask(content, function(err, res) {
        message.channel.stopTyping();
        message.reply(res)
      })
    } else {
      channel.startTyping();
      bot.ask(content.replace(/<@.*?>/g, ""), function(err, res) {
        message.channel.send(res)
        message.channel.stopTyping();
      })
    }
  });
});







client.login(process.env.BOT_TOKEN);
