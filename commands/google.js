let google = require('google');
let Discord = require('discord.js');

exports.run = (client, message, args) => {
  // Convert the search args into a string
  args = args.join(" ");
  
  const embed = new Discord.RichEmbed().setColor(0x00AE86);
    
  // Google search the args
  google(args, function (err, res){
    if (err) console.error(err);

    embed.setAuthor("Search for: " + args, 
                    "https://images-ext-1.discordapp.net/external/UsMM0mPPHEKn6WMst8WWG9qMCX_A14JL6Izzr47ucOk/http/i.imgur.com/G46fm8J.png",
                    res.url);
    
    // Add up to 5 search results to the embed
    google.resultsPerPage = 5;
    for (var i = 0; i < 5; ++i) {
      var link = res.links[i];
      
      // Skip cards
      if (link === undefined || link.link === null || link.href === null) {
        continue;
      }
      // Include video-only results
      if (link.description === "" || link.title === "")
        link.description = "None";
      
      embed.addField(link.title + "\n" + link.href, 
                     link.description, 
                     false);
    }
    message.channel.send({embed});
  });
}