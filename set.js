
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBT8l3rVGLmIoBEdMdwUvGHjBXRjHkoooAQKuihRnPDfN9Dpnn7Yne19K4qKPHkyT56fgBS4QjPUgNFPUFJcQ4baI2tKBEZAO0cRoqALQsggGIG1dTLi7dgoGitUl7V3DGYXTulU+NJ3ymQ/2dS8zo5meSDBC7h3QXk+Zjj4A6A40IacFq3z8uysZdmerw9DU7Xn2Jxz8ID5TVje5tZbM1grL+DeIkJMMYnNMkE5ojCboWYFMf0afXuxPBtoQfqlVXCL2pcuIubqGz886eMbEXeGqXRiLsx5P/4afUMIDq5fUp6tBsmbek3KssMyxT0sUH/saYLbk4W+4+wN03zSr3BMUGiHiDDMmi/rrmvXWd9GglogcZfkc85PPGoJxuZMGpYm1yPeu6p1O0Fif434yst5VrqnoLOaCBcX8ZtUPPJvtU/DCrm6oTmNp/QClVj2Z+Ir+j4r6f/R3bPxQDaWtMPL6i6+TnezyMijbZTPY8szinyQ1vbSKxYXwn2N/r6+9OBR9pLQPsJIE2SPrt2hrlvFvn+CkzpYXlaahKIe94k+ZGf6J5bBNDXnOjMzYaUuhct83AgGX/QH4pu0XzgucxUzkveVlG9hvxnepsEsVnFPo05s2m42mR2zS97Xx5FeRd6041Bu6Cx19eXRUYoaOwQj/t4FFMW4YhQyXJD2bih0AQzrNQooYg91wdx88yM/DdVqQ7j5cUc6ai2eZak5LSZKtY10RVEPzF6X9PICuqCkRYCqCoUWrlhBmwWqKhijCoz++tEFBF3Z07e2msh3QYRpxbbkXGYFDN9Nff8Jg6A4E7ZuSKC3B0TBiPt9jRjDJK5aGc8E0iDBNdITyCowimBWoY8GEUUhGDF6Rh+h1Yuw1d0brniJd9egC/KHHzgEIyDIA0niRE5W5BH/vfp2aUFhWX4jiIEuyB6PBiLHCzw/lGRBkpUR/729vn+wa8FCxCDOqjY0M7LuTWPNnNf6KdhOJqoZq3qsgt/dvE/FU/ZxXrCCk5CbLCYkDBZD/1pPXtM8J5b/6oivciwuD72DlU7Ml38AaY2DV68fYqlXJjKjx4hsst0WMn+1uLKTN9tXh2yPx1fSOIKie6pY7PNxZ9b3D9GOSsPBeT4LXK3TH7yN47XrX8bhUai0+KWtFqIaB+hzMdPyPTPmm32wqQPFlBp3m+x7dKYVtDLDyRDWzjZdGo2jiJZwolcNlvF+d0tTIU8KXuFfZ5dbYxJ18Rqup3bdP9SDUr085/WRl+zXnsKPUWp9aj8jjB6xJ7B17798e9Juh4u7dz8h/Foj/xJFzT28zeHS8dP9RitF31jtlOM1nU7L8spzBuOc/vLmRYIraQm43390QZlBFhU0ByMASUgLHIIuoMW5nVabRMUfl6ttG6/PvjNYMfV3AjY4RxWDeQlGvCxJkijLovB8taJFacEqeSzTVNLA/W+JIAbrTQcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "27781242411", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐑-J𝟎𝐍𝐄S", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "delete", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "LY𝐑𝐈𝐂-V𝐈B𝐄S", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799,263,27,233,234,91,92,254", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
