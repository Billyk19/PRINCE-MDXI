
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61Ua4+iSBT9L/VVZ5uHPJNOBnmI4BvR1s1+KKDEkqdUoeCk//sG7d7p7M7O9CbLJygq955z7rnnG8gLTJCLWqB+A2WFL5Ci7pW2JQIqGNaHA6pAH0SQQqCCwg23o4OvoGMmtbONdoIFQxxfKgd7riB2XdHDsCc95UkePoPXPijrIMXhTwru5ovVylqy+4DQ5KwV8GmRTXZozZZlK2jp5uilbtywE00vnsFrVxHiCuexWR5RhiqYuqhdQFx9Dv7VXnATtK3LJ4mIjRxkC5JkFr9ULAbOHSVZugo3G26SUaJ9Dv6hZmazzW0fs3Po3G49SW4Wp83eEAy5CY4TZhwL43mvTTccecAnOM5RNI5QTjFtP6/7XORlT/FHdKxZiS2ZsXHaBuG1SY/RFuZ5hIvVqpKaXbb7HHDFsjHP3G5Lw7LnPNfc+KV2TG6XOHV3geNsT3IrnzG6znz/I/BF9e6V5L/ofp60T4Hb24lb39Qu7vGs7JuV3/Pz0TBNkpVjJzJ7PMl5zAw+B38D49m6PKyDXektRmcpGSryxfUk1HjtS33CKC+1lzEOND35Dh/SuvoZylpjkVTMahm1Z6mQYrbZi6NNW/hmy69GWqYE+tJTOIZuQsaMzGCfGC9kyTiV6O4ufpw7RDvllqwwzlbQ2uYkhWKiL5/vjBLUjiOgsq99UKEYE1pBiou8O2P6AEYXD4UVondxgT/rXSaX9DZoLuvFRXnhTWRGrtS2WRRsa8ODLPKtm2fygvYM+qCsihARgiIbE1pU7RQRAmNEgPr7fU4d5QplBUUOjoAKOEniFVbkRJH9Sn67HiElsCx/yxEFfXCoimyKgEqrGvXB/b7CDQ3LYjjBGPKyLg0MSdcNURoa1sDkOIHt+GWPnmucIUJhVgKVlQRe5jhpwL32/xcYHC9pEi8opjwQLUlgBE43BJY1edPghIH1axh/9EGOGvrwcKc8z/bBAVeE+nldpgWM3g3+/hOGYVHn1GvzUO9eUAXUD8eIUpzHpCNW57AKj/iC9I4HUA8wJeivYaMKRe9c3gJML6K7B42lO+UdAXTYu0J/l0bl/ylO+rgkCJzMiJwgsKLIyir/tTvvgxx2lcCkrXD4ZYMDdPsyLGinzhvurk2EKMQpASrQ57ndc5a2Oc5JOV2ORpoZa3qsge8833fn4U5nB6cWnR72zqjRhJtuhN5OPvYw16x2DN9r1tIRbw10nBvX5x8UASpAdLORdsamtqcz03ZnY90OlVGwOoXzU57IA0aD3EEaRUZtBwt/8DTgmdEtmBJDyYz9SJ+UM/1iuzKjtcq4PnNkVno9LX7uukXogkP0sdmTx4onLhy4gizeWtubFGiVSLwcL9iTPnHS5sgRqw5qk3fSZLfn/bQ9DbbFtBG4on45X09PEyyXJTRuG8skFc/MfNuIH1t9T5X0Lc3x28bh++cBo3s4vk3jFxN9wL6nwWv/Q4W3sP2XwBp629FpGKxtzluR5Ty8xryZLcaHghJ/O5s9Eb832KUxX6xjGbx2/i9TSA9FlQEVwDyqirthqqLufDzOD8VPmukaM9beeKeQUO37bvxg3XjpcWtRFaUNyRGogF8pe17pjN5qZelRSN9XDWjd496u4PVPSG+2FpEIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "263789306836, 263784013161, 263776927057, 263771185311, 263781397158", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "group", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "27781242411", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐑-J𝟎𝐍𝐄S", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "delete", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃", //  don't change 
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
