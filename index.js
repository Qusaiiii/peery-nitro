const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Started - ${client.user.tag}!`);
});

client.on('message', message => {
if (message.content === '$$nitro-gen') {
   message.reply('جار عمل روابط نيترو...');
   setInterval(function() {
     var links = [];
     for (x = 0; x < 2; x++) {
       var used = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
       var link = "https://discord.gift/";
       for (var y = 0; y < 16; y++) {
         link += used.charAt(Math.floor(Math.random() * used.length));
       }
       links.push(link);
     }     message.channel.send(links.join(" "));
   }, 2000);
}
});

client.on("message", message => {
if(message.content.startsWith(prefix + 'room')) {
 let args = message.content.split(" ").slice(1);
   var nam = args.join(' ');

  if(!message.member.hasPermission('ADMINISTRATOR')) return   
  message.channel.send('You Dont Have `ADMINISTRATOR` Perm ! ').then(msg => msg.delete(6000))
  if (!nam) return message.channel.send(`<@${message.author.id}> اكتب الاسم !`).then(msg => msg.delete(10000))
  message.guild.createChannel(nam, 'text').then(c => setTimeout(() => c.delete(), 1080000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
  message.channel.send(`:ballot_box_with_check: Done : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ⏱ انتهى وقت احد الرومات !`), 120000))  // 120000 دقيقتان
}
});



const prefix = "$$"

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "513730861947158556") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
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
    message.channel.sendMessage(`Streaming: **${argresult}**`)
} 
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}**`)
} 



});


client.on('message', message => {  
            if(!message.channel.guild) return; 
var args = message.content.split(' ').slice(1).join(' '); 
if (message.content.startsWith('!bca')){ 
 if (message.author.id !== '513730861947158556') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **') 
message.channel.sendMessage('جار ارسال الرسالة |✅') 
client.users.forEach(m =>{ 
m.sendMessage(args) 
}) 
} 
});

client.login(process.env.BOT_TOKEN);
