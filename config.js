module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/HmDrRxVQbs", //Support Server Link
  Token: process.env.Token || "ODY4NDAwMTQ2MzA2NzE5NzU1.YPvGqA.P3csjxPJlJaVW8UDTkUUAGUZWZ", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "868400146306719755", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "MVut6BUCT4dlRaeIUNsUWG2ZyS4famwl", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is EPIC", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "0.0.0.0", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "a694f9e36cbe4e10b8058caf7038c032", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "84327e5111a74dc4a1140b33957f9f41", //Spotify Client Secret
  },
};
