
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW5OiOBj9K1t51ZpWwk2rumoBaUQUoZX2sjUPEQJEuXUSRJzyv29hd0/Pw+5s71tIwsn5zjnf9wMUJWHYwS0Y/wAVJWfEcbfkbYXBGOh1HGMK+iBCHIEx2OlqKAxO4X4OC91+fobr5uCVF3WemMGl4jNlCPNXmEyOxe4R3Pqgqg8ZCX8DaHqQ0nmRrjaue1orr4oX5QPX0AIYWRaJT24sISyG4qvFHsGtQ0SEkiIxqxTnmKLMwa2HCP0a/dCRG7RVhLW/DQKXtCN3Pro8xVTahgPGjxkdvXp+SKb7rfg1+kHkL9LkvNS3Ar1I0kgWnmy4sHs7YzDCI/nllOCBs5m6zrP/Rp+RpMCRHeGCE95+WXdVk5fNvpm0AUmGPTvY53PLYm3rhzVzFp4ZLU8zyWytMP+i7lmp76/iZLtiJcTWztxTVWcpVLFnSdeJs10en+Whzu3ztfmVuEc/snL6P7obhn0MthfHPfm9PBFggZ3tzJvDVX6M6WSdNydfvp6vghv4X6N/rMS1hKr9RTFVVEv2JErrk3pcsbWyMdRgCSVibV6UZr7dfdJHvKa/Y7kSroq/eXohmXXIVlpYHZ2VDEN2yOXDppBYIF/c3CjiJB1YPbHYexl8tpDubydFRPjyob0elGqRtNyZrWxa7AR/edGbx3tFJ9zaERgPb31AcUIYp4iTsrjvyWofoOi8wiHF/C4vOG3y9iQ/DQ3upNA2F85kUUzPRwhXM/9Z8R7So1meZXn3woJH0AcVLUPMGI6mhPGStgvMGEowA+O/vvdBgS/8zbjuOTjsg5hQxoOirrISRR+ufhyiMCzrgq/aIjS6BaZgPPjcxpyTImGdjnWBaJiSMzZSxBkYxyhj+GeFmOIIjDmt8c+uNcroLrxnip5pjkAf5HdDSATGQJChoo7gQFahPIbqn+xb08GiqvpWYA76oEDdbTAhZ1LgP0zGcBFi0AfZ2+8iFKGoQkUYjcQB7BC6g9tP5t1DEeaIZKyL5KyH0roxzfl60bKFZWl2ohmJBj4r/YjMmyW1QYTo+HrtIdEORZ3V5mKaO+72yLTyoJOLcjST4VGf02z3+A8gYAyqYD+0oC1H18Y5PaRpOLNS+SDooyiblFoah/uLUBiu/yT7ii9GcWPtvfnh2tSlM4QqWczEwaJXQWeFU+cki7q8NJJ7vvogwmcS4l8f2xfU7mlDkubJg67xDR722lSLyaV2o1rdz+Lhc7sq94ftNRkFIs2nZB2pi4e5MHJrtL6YzrTy/NEW5clAE156sr08S9p7mO/NlL0PMXKPWedh9xkTfJ8J7179p6dvxLvoDW79XzDep8y/dKp+SEpe7GT2kNfGdKkd5ulEl8jxRVQ0x2p2DIsX2901K1nagNvtex9UGeJxSXMwBiw/INAHtKy7INtFXP5ucmkD29Deys4Q49pnc6xJjhlHeQXGQ0USoCgOBentlkfLaopY2ilgiVpeg9vfAwizMGoHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
