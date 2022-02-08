const chalk = require('chalk');
const figlet = require('figlet');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.js');

// © Enes Emre Mercan | Kopyalamayın


module.exports = client => {
  
  d_id = figlet.textSync("Oto Cevap")
  console.log(chalk.blueBright(d_id));
  console.log(chalk.green('[Oto-Cevap Bot Bağlantısı]: ') + chalk.yellow('BAŞARIYLA KURULDU'))
  console.log(chalk.green('[Oto-Cevap Bot Ayarlar]: ') + chalk.yellow('BAŞARIYLA AKTARILDI'))
  console.log(chalk.green('[Oto-Cevap Bot Hesap Bilgisi]: ') + chalk.yellow(`${client.user.tag} hesabına bağlanıldı.`))
  console.log(chalk.green('[Oto-Cevap Destek]: ') + chalk.yellow('emre#0001, kediler.xyz'))
  console.log(chalk.red('[Oto-Cevap Bilgi]: ') + chalk.bgRed('Bu bot sıfırdan Enes Emre Mercan tarafından kodlanmıştır. Lütfen kopyalamayınız, değiştirmeyiniz.'))
  client.user.setActivity(config.SETTINGS.Status);

}

// © Enes Emre Mercan | Kopyalamayın