let google = require('google');
let Discord = require('discord.js');

google.resultsPerPage = 5;
let nextCounter = 0;

exports.run = (client, message, args) => {
  // Convert the search args into a string
  args = args.join(" ");
  
  const embed = new Discord.RichEmbed()
    .setAuthor("Search for: " + args, "https://images-ext-1.discordapp.net/external/UsMM0mPPHEKn6WMst8WWG9qMCX_A14JL6Izzr47ucOk/http/i.imgur.com/G46fm8J.png")
    .setColor(0x00AE86);
    
  // Google search the args
  google(args, function (err, res){
    if (err) console.error(err);

    // Add up to 5 search results to the embed
    for (var i = 0; i < 5; ++i) {
      var link = res.links[i];
      
      // Skip cards
      if (link.link === null) {
        continue;
      }
      // Include video-only results
      if (link.description === "")
        link.description = "None";
      
      embed.addField(link.title + "\n" + link.href, 
                     link.description, 
                     false);
    }
    message.channel.send({embed});
  });
}