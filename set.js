
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU226jSBD9lVW/2hqDGwy2FGmhfcPEt2Bik9U+tKGBNlfTDZiM/O8r7GQSaWZnszw1fak659Sp+g7SjDJikgaMvoO8oBXmpF3yJidgBPTS90kBusDDHIMROCNRgWMXOxfb9BdWbyNniuJ5tsyKCL02ylFFHD69pP5cegDXLsjLY0zd3wTUBgjB2EkyqdlGSrXqkf15hwez3SEcjwth6T7TQj5YY/miPoBrGxHTgqbBJA9JQgocm6TZYFp8Db65Ll2lxxc8O5dwIi3ItpLMo8BT6NWXpi43HdcK1TM9zOyvwY8i2663SO4NhGUczk+1XIdOsDnRdV9sQqQJkqVOluvdRq/v8BkNUuIZHkk55c2XdV9O47M4pi/ufPqa0oMwrgnPTdYTSnu19dcDffp4uhxT0Z0HXwO+L61ibx78flNUp3CVIm8Px+t4Pdljrwnd6WJFe9A2cg8an4FvinevRP9H92YsScbLLn6N606dn3lVNtP5LArlE4GRpotitDFetkJnd/iibSxk97hvT9W5zQLnCdl8up2V5iqszdkqX4Q8yMpDJJzNOPqAj3lZ/A7lNot85NJdkOyrqcXTjbZKIm8RZKES7Fa+PMRmlCWGIlnzqhGm5XkXhIFc732nLG3bDvfKTln0lsdXfChmM8c6oUekBQ83RhFpDA+MxGsXFCSgjBeY0yy97fVhF2CvsohbEH6TF5gozI6LlHfclb4o0a4f96bPKx6tteNzaQwmOpM6ignHcLN9AF2QF5lLGCPenDKeFc2SMIYDwsDor1ulWtIFSTJOFtQDI9AfQEUdQmGgwsGf7FsdYs5wnn9LCQdd4BdZsiRgxIuSdMHtgaohXVUFSVUVcSzrIkSDoYYmYxVOkQDFaUsxuSfd0YQwjpMcjERF7g9ESZbh9e8uSMmF3/3TsoZiF/i0YNxOyzzOsPdurvdD7LpZmXKrSV3ULkgBRsLHNuGcpgFrmZUpLtyQVgS1PMDIxzEjP4QmBfHeubwND5R5bf2H0Jxp1h6BFnsb6CdtRlL/Z3lS3N4GY1rRlPwxYYykLgFdEN+fS1CCkgqV/nAoCbCN0B5cfyBvE3mEYxozMAJo0cFhWU8mRrnqq8vZTHMCDQUa+GD67ty7M0pE+97p/NrBkuFKOisny3lirg4npmVHnV6U0yQQT/pjETsPvwgCRqCuerIUDVWbHfZPzhQNN0bWN+b6+AjH7uPauiz2AcJrQhzhecD9wiJz41KxRbMx5EbfOgy+brb7xnnaBxM+NQfSo5zq24c2m0cq6pLPySLP2Q2NR9/09mwAh7DPyFqcP/U20dpwZCeBy9fttKqgLgSBI9Rx7kTC2d4ah4O4WS9odlFx5l48BRlndwhXtrroELS999Stp+O3WUrf3E5vvz4lt9H0Vqv/rOkdeGs94dr9FONt2P3LwNCPQcZTZ8B6SYnma+34GI51mZ6eJUUzZ7XDiHQxVk5tDeQ9uLY9kMeY+1mRgBFgyRGDLiiysjWykfrZbzIhTTCQdqcdY8a1j+b4Rb9J6v3WpsjyOWZhq8BM0pKydXqj5bnFMX/vNaC131w/g+s/JYcx1g4IAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "263789306836", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐑-𝐃V", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
