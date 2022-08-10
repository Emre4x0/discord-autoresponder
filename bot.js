const Discord = require('discord.js'); // Created By Enes Emre (Emre4x0) (kediler.xyz, emre#0001)
const { Message } = require('./config.js');
const client = new Discord.Client();
const config = require('./config.js');
const chalk = require('chalk');
const moment = require('moment');
moment.locale("tr");

// © Enes Emre (Emre4x0) | Kopyalamayın

require('./util/eventLoader')(client);

client.login(config.SETTINGS.Token);

const log = message => {
    console.log(chalk.yellow(`[${moment().format('DD.MM.YYYY HH:mm:ss')}]: `) + chalk.magenta(message))
  };


client.on('ready', async () => {
    client.on('channelCreate', async (channel) => {
        
        if(channel.type !== "text") return;
        
        if(config.SETTINGS.Parent.includes(channel.parentID)) {
       
            if(config.SETTINGS.Message === true) {
            
                config.MESSAGE.NormalMessage.forEach(message  => {
            
            if(!message.Message) return log("Mesaj kısmını boş bıraktığınız için mesaj gönderilemedi.");
            
            channel.send(message.Message);
            
        });

        }

        if(config.SETTINGS.EmbedMessage === true) {
           
            config.MESSAGE.EmbedMessage.forEach(embedmessage  => {
            
                let Embed = new Discord.MessageEmbed()

                if(embedmessage.EmbedColor) {
                    Embed.setColor(embedmessage.EmbedColor);
                }

                if(embedmessage.EmbedTitle) {
                    Embed.setTitle(embedmessage.EmbedTitle);
                }

                if(embedmessage.EmbedURL) {
                    Embed.setURL(embedmessage.EmbedURL);
                }
                
                if(embedmessage.EmbedAuthor) {
                    Embed.setAuthor(embedmessage.EmbedAuthor.name, embedmessage.EmbedAuthor.iconURL, embedmessage.EmbedAuthor.url)
                }

                if(embedmessage.EmbedDescription) {
                    Embed.setDescription(embedmessage.EmbedDescription);
                }

                if(embedmessage.EmbedThumbnail) {
                    Embed.setThumbnail(embedmessage.EmbedThumbnail);
                }

                if(embedmessage.EmbedImage) {
                    Embed.setImage(embedmessage.EmbedImage);
                }

                if(embedmessage.EmbedFooter) {
                    Embed.setFooter(embedmessage.EmbedFooter.text, embedmessage.EmbedFooter.iconURL);
                }
                
                channel.send(Embed);

            });


        }

        } else {
           return;
        }
    });
})
  
  
// © Enes Emre (Emre4x0) | Kopyalamayın

  

