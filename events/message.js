module.exports = (client, message) => {
  // Ignore message if it doesnt start with the prefix
  if (!message.content.startsWith(client.config.prefix)) return;
  
  // Get each space-separated word without the prefix
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args[0];
  
  // Grab this command's file data from the Enmap
  const cmd = client.commands.get(command);
  
  if (cmd) {
    // Run the command
    console.log("Running the command: " + command);
    cmd.run(client, message, args);
  }
};