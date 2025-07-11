
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGAG5aURHbIGKNxREBdzYhxIKKOUmFCA94b9voNPT87A728tTkZWRefLkOfUdpBkp8Qq3YPwd5AWpEcXdkbY5BmOgVEGAC9AHPqIIjMHWcLke0qE0bKA2bG1uAr20nhPFsbN7NLXMnrArYo0I8+kbePRBXp1j4v2moLTKeZkMBMht4tUOrg6W69ClvZdHenLXLOF9FxB49m2FKd/Ao6uISEHScJpHOMEFile4NRApvgb/OhuyNxyopb6CqipXoTHiXVmRLpA2jX/YQrYWbSOxNsPwa/BpFTfKsnZE4RZKtZFvs421t69NUcKRJip6iKNNzazL+yx8wS9JmGJ/4eOUEtp+mXeorR24cql9CJSbqx/E0Zk/HptE3zs8PJ3gNJqYOZsJeWp+Dbise5pZ8Umj9exbNU1CVhEWfo3ayZlzytYYuAFf60wjTctfgRvFh1au/4f3hR5f/flZsuRl6Bw2WnKdDritOuhdB6Iey60n3PfwFMhO0nwN/nSUMAdIuNOqEqpeMlB0cyWpJ0tNtfuWUxRB2u0PjO661+wTPqJV8TuUbQWRmUfqlRqFn4r3bOUMJ0LjmcZisjvdWRmZse1AMeXD881e63Y6OL7blq3vee0UF1Wuxh6f1NmlF61tVw4ybvSumm/Pia64XfhgzD76oMAhKWmBKMnSLiaO+gD5tYW9AtMnu2BXFYIVLcjosrzNFuqmPNWqMLky7LFTsBJk2y02IM83y8Mb6IO8yDxcltifk5JmRavjskQhLsH4z7/6IMV3+tpb123I9kFAipIe0iqPM+R/LPXjEnleVqXUalNP7Q64AGPmM4wpJWlYdjRWKSq8iNRYjRAtwThAcYl/DogL7IMxLSr807Rq5ne887yiuc5yAvogee6D+GAMOEmSWY7neJYdD6U/ym9NVxXl+bcUU9AH8TOL5UY8O2TEEcvJ4rBL7OKPn/i6cj6miMQlGAN1i/L39XUyXYm7RtY1DU5DqIYQfM7zoYsX8ZFxtrabZGSR0eyu+ceZWVppebxYm0ttN/O0bDOqSeK5Z8K3fygCxiBpHNcOo4F/qwpzu6LxIsy9pdPD+kyJt9FQqpb2lsaaxZyHbHSyjnrOevN35FzP8MxXQ6NN23ueG+LebWQ18JWjQJ8i6gMf18TDvzbTrkhP0qvNmKNSJH5E71vHmSVDZLMDE8ozPhwElrB2bqsVWWxssT5KOxOm+6TdiOy6EtPQ7O2MgGEiTZyIVbt2NqnSvBT7dEz846UiTzF1m+p+A4Kfxk9Rt7//3NwLd6cv5tH/pcSPl+Rf3Ki4e465XE71Iat33i497g7raS7NXObiSmypCJJ+W+86818heDz+6oM8RjTIigSMAUr9IiM+6IMiqzrBLtIg+00zFTILFb4Gj1FJ4acJ9iTBJUVJDsasJHAcx8oy+8oyiiyfozLqODhK0u3QKbqFeW5RRD88BWD3ze0YPP4GYHgQ5m4HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "27781242411", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐑-J𝟎𝐍𝐄S", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
