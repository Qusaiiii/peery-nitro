const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./index.js'); //اسم ملف بوتك 
Manager.spawn(2);
