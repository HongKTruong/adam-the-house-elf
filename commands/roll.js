module.exports = {
  run: (client, message, args) => {
    // Return a random integer between min and max (inclusive)
    let max = 6;
    let min = 1;
    if (args.length > 0 && !isNaN(args[0]) && args[0] > 0) {
      max = args[0];
    }
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    message.channel.send("**" + message.member.displayName + "** rolled `" + result + "`");
  }
}