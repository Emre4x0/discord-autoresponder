## Discord Otomatik Mesaj Gönderici

Bir kanal kategorisi belirleyip o kategoride oluşturulan yazı kanallarına istediğiniz şekillerde mesaj iletebilirsiniz! Bot hızlı bir şekilde kurulup yeniden geliştirilebilir. Yazılım dili olarak `Javascript` ve kütüphane olarak `discord.js` kullandım. 

Node.js sürümüyle ilgili problem yaşarsanız eğer `Node.js v12.19.0` kullanıyorum. İndirmek için [buraya](https://nodejs.org/dist/v12.19.0/node-v12.19.0-x64.msi) tıklayabilirsiniz.

### Bot Kurulumu
- Botu kullanmak için `BİR BOTA` sahip olmanız gerekiyor.
- Kodu ZIP olarak indirin ve klasör olarak çıkarın.
- Herhangi bir terminal veya konsol açarak `npm install` komutunu kullanın.
- `config.js` dosyasını (ana kaynaktaki) açın ve yönergelere göre düzenleyin.
- Config dosyasının varsayılan hali:
```js
module.exports = {
  SETTINGS: {
      
    /**
       * @BotOwners Bot sahiplerinin kullanıcı ID listesi.
       * @Server Bot özelliklerini çalıştırmaya izni olan sunucu ID listesi.
       * @Parent Botun mesaj atacağı kategori ID listesi.
       * @Message Normal mesaj atması için. (true, false)
       * @EmbedMessage Embed mesaj atması için. (true, false)
       * @Status Botun oynuyor kısmını düzenleyebileyeceğiniz kısım.
       * @Token Bot tokeni.
       */

      BotOwners: [""],
      Server: [""], 
      Parent: [""],
      Message: true,
      EmbedMessage: true, // Hem embed mesajı hemde normal mesajı açabilirsiniz.
      Status: "Destek için: emre#0001, kediler.xyz",
      Token: "", 
  },
MESSAGE: {
  NormalMessage: [
    { Message: "Some message" }, // Birden fazla mesaj ekleyebilirsiniz. (Bu satırı kopyala yapıştır yaparak.)
    { Message: "Some message 2" }, 
  ],
      EmbedMessage: [
          { // Birden fazla embed ekleyebilirsiniz. (Bu kısmı kopyala yapıştır yaparak.)
          EmbedColor: "#0099ff",  
          EmbedTitle: "Some title", 
          EmbedURL: "https://kediler.xyz/", 
          EmbedAuthor: { name: "Some name", iconURL: "https://kediler.xyz/img/whois.png", url: "https://kediler.xyz" }, 
          EmbedDescription: "Some description here", 
          EmbedThumbnail: "https://kediler.xyz/img/whois.png",
          EmbedImage: "https://kediler.xyz/img/whois.png", 
          EmbedFooter: { text: "Some footer text here", iconURL: "https://kediler.xyz/img/whois.png" },
          },

          { 
            EmbedColor: "#0099ff",  
            EmbedTitle: "Some title 2", 
            EmbedURL: "https://kediler.xyz/", 
            EmbedAuthor: { name: "Some name 2", iconURL: "https://kediler.xyz/img/whois.png", url: "https://kediler.xyz" }, 
            EmbedDescription: "Some description here 2", 
            EmbedThumbnail: "https://kediler.xyz/img/whois.png",
            EmbedImage: "https://kediler.xyz/img/whois.png", 
            EmbedFooter: { text: "Some footer text here 2", iconURL: "https://kediler.xyz/img/whois.png" },
            },

        ],      
    }
    }
```

### Başka Sorunuz Varsa?
[emre#0001](https://discord.com/users/538846533123309584) kullanıcısına DM yoluyla ulaşabilir veya [Kediler](https://discord.com/invite/dWgGmkK8z9) Discord sunucusuna katılıp sorunuzu oradan iletebilirsiniz.
