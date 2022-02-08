module.exports = {
  SETTINGS: {
      
    /**
       * @BotOwners Bot sahiplerinin kullanıcı ID listesi.
       * @Server Bot özelliklerini çalıştırmaya izni olan sunucu ID listesi.
       * @Parent Botun mesaj atacağı kategori ID listesi.
       * @Message Normal mesaj atması için. (true, false)
       * @EmbedMessage Embed mesaj atması için. (true, false)
       * @Status Botun oynuyor kısmını düzenleyebileceğiniz kısım.
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
