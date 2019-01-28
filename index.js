const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Started - ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  if (message.author.id !== "513730861947158556") return;
if (message.content === prefix + 'nitro') {


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

client.on('message' , message => {
    if (message.content === (prefix + "invite")) {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
  const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Invite Me [ CLICK HERE ]')//رسالة
 .setURL('https://discordapp.com/api/oauth2/authorize?client_id=538016614621118484&permissions=130048&scope=bot')
 .setFooter('Nirex Bot')
     message.channel.sendEmbed(embed);

   }
});

//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes
client.on('message', message => {
    if (message.content.startsWith("!boty")) {
    message.channel.send({//Toxic Codes
        embed: new Discord.RichEmbed()//Toxic Codes
            .setColor('RANDOM')//Toxic Codes
            .setTitle('Stats Bot / Info ')//Toxic Codes
            .addField('``Uptime``', timeCon(process.uptime()), true)//Toxic Codes
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)//Toxic Codes
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)//Toxic Codes
            .addField('``Guild Count``', client.guilds.size, true)//Toxic Codes
            .addField('``Bot In channel``' , `${client.channels.size}` , true)//Toxic Codes
            .addField('``Users rout``' ,`${client.users.size}` , true)//Toxic Codes
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)//Toxic Codes
            .addField('``Bot Id``' , `${client.user.id}` , true)//Toxic Codes
            .setFooter('Nirex Bot')//Toxic Codes
    })//Toxic Codes
}//Toxic Codes
});//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codesv


function timeCon(time) {//Toxic Codes
    let days = Math.floor(time % 31536000 / 86400)//Toxic Codes
    let hours = Math.floor(time % 31536000 % 86400 / 3600)//Toxic Codes
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)//Toxic Codes
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)//Toxic Codes
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
} //Toxic Codes


client.on('message', message => {  
            if(!message.channel.guild) return; 
  
      const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`**__Nirex Nitro Info | معلومات نايركس بوت__**`,`

بوت يعطيك نيترو لمعرفة كيف تجيب نيترو والخ ادخل سيرفر البوت
وشوف روم
#get-nitro
     `)
     .addField(`**__Server | سيرفر__**`,`
لادخال البوت الى سيرفرك قم بكتابة:
**$$invite**
رابط السيرفر:
https://discord.gg/m9KhmMk
`)
if (message.content.startsWith('!bcinfo')){ 
 if (message.author.id !== '513730861947158556') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **') 
message.channel.sendMessage('جار ارسال الرسالة |✅') 
client.users.forEach(m =>{ 
m.sendMessage({embed}) 
}) 
} 
});


client.on('message', message => {
    if(message.content == '!slis2') {
             if(!message.author.id === '513730861947158556 ') return;
    var gimg;//Toxic Codes
    var gname;//Toxic Codes
    var gmemb;//Toxic Codes
    var gbots;//Toxic Codes
    var groles;//Toxic Codes
    var servers = client.guilds;
    servers.forEach((g)=>{//Toxic Codes
    gname = g.name;//Toxic Codes
    gimg = g.iconURL;//Toxic Codes
    gmemb = g.members.size;//Toxic Codes
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});//Toxic Codes
    let serv = new Discord.RichEmbed()//Toxic Codes
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);//Toxic Codes
          message.channel.sendEmbed(serv);
    }) //Toxic Codes
    }//Toxic Codes
    }); //Toxic Codes

    
    client.on('message', message => {//Toxic Codes
    if(message.content == '!slis') {//Toxic Codes
             if(!message.author.id === '513730861947158556') return;  
             if(!message.author.id === '513730861947158556') return;
    var gimg;//Toxic Codes
    var gname;//Toxic Codes
    var gmemb;//Toxic Codes
    var gbots;//Toxic Codes
    var groles;//Toxic Codes
    var servers = client.guilds;//Toxic Codes
    servers.forEach((g)=>{//Toxic Codes
    gname = g.name;//Toxic Codes
    gimg = g.iconURL;//Toxic Codes
    gmemb = g.members.size;//Toxic Codes
    let serv = new Discord.RichEmbed()//Toxic Codes
    message.channel.send(`
    **-------------------------**
      Server Name : **${gname}**
      Server MemberCount : **${gmemb} **
      **---------------------------**
            `);//Toxic Codes
    }) //Toxic Codes
    }//Toxic Codes
    });//Toxic Codes


client.login(process.env.BOT_TOKEN);
