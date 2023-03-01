const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1076376186491510815')
    .setType('PLAYING')
    .setURL('https://youtu.be/YQ-qToZUybM') //you can change url here
    .setState('Games')   // change states to watever you want
  
    .setName('.KuwNowe#6868')  //set name
    .setDetails('Discord Bot Developer') // set details
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now()) // you can remove the'//' so it can start counting time
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1008766413391003688/1079277584388456468/FB_IMG_1677137071988.jpg?width=613&height=613') //big img url
    .setAssetsLargeText('visit this') //big img name
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1008766413391003688/1079051643007545384/FB_IMG_1675416428889.jpg?width=515&height=613') //small img url
    .setAssetsSmallText('discord') //small img name
    .addButton('Github', 'https://github.com/Vkairus') // button1 name and link
    .addButton('Discord Server', 'https://discord.gg/obb') // button2 name and link
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); // you can set it to dnd , online or idle
})

client.login(process.env.TOKEN)
