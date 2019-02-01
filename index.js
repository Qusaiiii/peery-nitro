const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Started - ${client.user.tag}!`);
});





const prefix = "!!"

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
 .setFooter('Crackers Bot')
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

client.on('message', msg => {
  const visa =
[
"5268615251631074|03|2022|810",
"5268615607414787|07|2023|627",
"5268615607540052|05|2024|757",
"5268615314834087|03|2022|839",
"5268611353014335|05|2024|437",
"5268616672501680|10|2021|616",
"5268616658140784|09|2023|397",
"5268618277123738|06|2021|375",
"5268617042708203|04|2024|797",
"5268614403361110|06|2023|343",
"5268616548633683|08|2024|754",
"5268615804602150|09|2022|510",
"5268616437067472|12|2023|771",
"5268613374544548|04|2024|629",
"5268616815463632|04|2023|738",
"5268612478768821|04|2021|166",
"5268613062756081|03|2021|936",
"5268617255412543|08|2021|737",
"5268618410036722|09|2021|194",
"5268616731870746|02|2021|326",
"5268617623765887|02|2024|322",
"5268612561634823|11|2023|418",
"5268616362652512|04|2022|942",
"5268614705363822|11|2024|157",
"5268617042168630|09|2022|720",
"5268610733403127|04|2021|448",
"5268611244718235|06|2024|897",
"5268616633465611|05|2022|544",
"5268613186176752|04|2023|791",
"5268613627700855|09|2021|747",
"5268611532802006|02|2022|969",
"5268617648510300|01|2024|389",
"5268611346248255|09|2021|476",
"5268610627842752|06|2022|583",
"5268618845163208|03|2022|940",
"5268618571826721|03|2024|854",
"5268610402245718|03|2023|966",
"5268613732043472|12|2023|677",
"5268612741434052|06|2022|816",
"5268611325126050|10|2023|552",
"5268613006426148|10|2021|698",
"5268611655148757|12|2023|348",
"5268613403104843|01|2023|465",
"5268613210585473|05|2024|257",
"5268613601754332|07|2022|435",
"5268611635664485|02|2024|657",
"5268610035423773|04|2022|628",
"5268611708783667|10|2022|267",
"5268616406274844|01|2024|846",
"5268617864070047|04|2021|793",
"5268615375461762|11|2021|762",
"5268612368088561|05|2022|699",
"5268613627141381|03|2021|178",
"5268610552746523|09|2021|591",
"5268610421780828|10|2023|385",
"5268612651623652|12|2021|534",
"5268612380611341|09|2022|817",
"5268610041267362|02|2023|341",
"5268617754473103|05|2022|766",
"5268614248561874|11|2022|344",
"5268611376771887|10|2021|430",
"5268618853550767|01|2023|475",
"5268610815607611|09|2024|722",
"5268616660660761|08|2022|903",
"5268616638551753|09|2023|842",
"5268613528053404|11|2024|381",
"5268618104758870|04|2022|139",
"5268613441818404|12|2023|651",
"5268615788340710|11|2023|790",
"5268612553068105|04|2022|675",
"5268610127161646|11|2023|262",
"5268614242873044|09|2024|848",
"5268613564845333|02|2022|902",
"5268615223000150|02|2024|455",
"5268615538101685|10|2023|622",
"5268613287718718|11|2021|736",
"5268612454432244|02|2022|923",
"5268613287415778|03|2022|917"]
  const premium = ['513730861947158556']

  if (msg.content === '!visa-mx') {
    msg.author.send(visa[Math.floor(Math.random() * visa.length)]);
    msg.channel.send(" تم ارسال في الخاص ")
  }
});

  client.on('message', msg => {
  const uplay =
[
"sethmantpa@outlook.com:Boots2323",
"titi8459@live.fr:florian84",
"ianobrienschull@gmail.com:ian260688",
"calvinha704@gmail.com:whattheflip1",
"james.bully@wanadoo.fr:bullit90",
"chase.turner77@yahoo.com:Lightning7",
"darknight718@yahoo.com:Shotgun678",
"bakelemo@hotmail.fr:bakele97620",
"hibel@nate.com:rkd30922",
"serranoserra@hotmail.com:fK86Cmsw",
"thomasjgage@hotmail.com:superduper",
"darkshinys@hotmail.es:ferrari470",
"kjellsegers@hotmail.com:Kjeseg1987",
"gomen_nasai@hotmail.com:Perchiut0",
"paiwooz@hotmail.com:0870529105z",
"gtrulz1882@hotmail.com:Piccollo87",
"string.cheese.13@hotmail.com:Tannehill17",
"jonny-_-payne@hotmail.co.uk:Jon",
"markeng4ever@hotmail.com:Stensby26y",
"iaa1998@hotmail.com:Callofdiuty2"
  ]
  const premium = ['513730861947158556']


  if (msg.content === '!uplay') {
    if(!msg.author.id === premium) return;
    msg.author.send(uplay[Math.floor(Math.random() * uplay.length)]);
    msg.channel.send(" تم ارسال في الخاص ")
  }
})

client.login(process.env.BOT_TOKEN);
