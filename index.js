const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("+");
var diplo =("er");
bot.on('ready',() => {
    bot.user.setPresence({game:{name:'Regarder un live de AryCoop_'  , type: 3}})
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);
   
bot.on("message" ,message => {    
    if (message.content === prefix + 'help'){
        var help_embed = new Discord.RichEmbed()
            .setColor('#5D58FB')
            .addField("Commande du bot","+help")
            .addField("Divers","lay: le bot repond up")
            .addField("Music","Bientot")
            .addField("Admin","Bientot")
            .setFooter("Crée par rtBeta")
         message.channel.sendEmbed(help_embed);
        console.log("Commande help demandée ! ");
    }

    
});
bot.on("message" ,message => {
    if(message.content === "lay"){
        message.reply("up");
        console.log('lay up');
    }
})

bot.on("message" ,message => {
    if(message.content === "ok"){
        message.reply("okay");
        console.log('ok okay');
    }

    if (message.content === prefix + 'ds'){
        message.reply(diplo)
        console.log("discord demandée");
    }
    if (message.content === prefix + 'ub'){
        var ub_embed = new Discord.RichEmbed()
        .setColor('#5D58FB')
        .addField("Créateur","-")
        .setFooter("Crée par rtBeta")
        message.channel.sendEmbed(ub_embed);
        console.log("créateur demandée");
    } 
    
    if (message.content === prefix + 'th'){
        message.channel.send("https://www.twitch.tv/arycoop_")
        console.log("recru demandé");
    } 
   

})
