
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61U25KiSBD9l3rVWRHkGtERU1xUVBQb7xv7UECJpdwsChAn+t83aLt3OnZnZ3ojlqciqyLznJMn8xtIM1LgKW6A9g3klFSI4fbImhwDDejl8Ygp6IIQMQQ0IDnzQeNuzHwKrcauPTu4SpRfGk2pS6cxSZEygnt/gYMhfAIvXZCXfkyCnyXcUj8QahZs7d068OP0udMrt5bt1BXp+NRDR10xx+NdFC2fwEubERFK0sjKTzjBFMVT3LiI0M/BH1lK0iiOKKjxlj+n8vUWebxjboJVbvXseL3Jk/0SLs+djfM5+H4ujm1vT3Je4Xg7HyvlDm84OL063KDfq4xpKKuSnxihXj/gFyRKcWiHOGWENZ/WnZj+fHebdCSTLYqdK6v9ANa9qnFrWEoJVqV5FTMbOwqnfA74CAWi3lyGVyuezpMJNPNJzy3s+yHdJNNR7SXJ9rAMTP9ILh+Bu/TdK5f/oju3iCc7xM7Xi3UdX8uhlY3rM7mGm6xCO2paa4Y4q86xuI0+qftiHR76cFFlm20BqwNRiWvHauKPU4JLRa2cQpyd50l2+gAfsZL+DCU7o+1m77icd5h1FBwpSza4CEsV3/er1GfJ9Xl/zqadi/28Lu50OVYvgsTr9UnH6jqJxUxAZ/nkBbMwl1aNv5q6fNxEy6dXRhfc2CHQ+i9dQHFECkYRI1naxnie7wIUVh4OKGav8oIV3I8W5mRd1+Z1EMH8nhTMruqGHa9ZMe+tql6d7yecXm/hE+iCnGYBLgocjknBMto4uChQhAug/f7aqZY0xUnG8ISEQAO8LAtqX+Ilqf+1+K0+IVagPP8txQx0wZFmiYOBxmiJu+D1vcjxA1HSRYnvC/LANGRDlnnLslRuAA2JN1qGyaPmiiS4YCjJgdaXRUHtc6oov3T/Fxi6KJlwKJq8Ig8sS+QgFFRDHvYVQ4H6cCj9EsYfXZDiG3u4uNVe6HfBkdCCrdMyjzMUvlv8/RIFQVamzGvSwGgPmALtQxgzRtKoaImVKaLBiVTYaHkA7YjiAv/Vbkxx+M7lbYUZWdi6UFJHQ8+bKKDF3ib6uzTa4J/ixI9HosgrnMSLYl+S+oo2+NrGuyBFbSYwaygJvmyIj+9f9Iy16rzhbsuEmCESF0ADxoKOO5Pl2JpI4bVYjkbQiqARQfCd5/v0PNw52SNnyJzjYTK6QfFumIG3V04dwt+e95zQua3kE9ma+LQw66cfJAEagHq+3AlKL5vWqGNnkrqaGaw0T72bbVeG1HGntOpI/nW2gtL8Mmj8yYHsT+Pd2qUmNgi5knWl1xtP5hynak7EW5YDvX5qq4W4IgH+WOzq1ttaKGNzrXCrobNLZ/tDpqLlzmYLUxL3Pehu+RvVWSfrD0w+su+2b7vDCz8cGAuxGWZrXtc3M7xdP7tOHOx6M6NH4GOuX/dK/LbPydvEkdffI8Gv6/GtG7/o6AN2azvupfshw9u6/ZeVpXvb0Vn3V2Peey6Wi6COBCtx7WPGivV2Pu8V685gH0dCtooU8NL6P48RO2Y0ARpAaUizV8PQrGx9bKfH7CfFDMjZMHrwjlHB4PfZ+NG4cY9XLs3yMSpOQAPCs3oQ1NboDcxzjyH2PmoAtt/03oCXPwEChqiUkwgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "263789306836, 263784013161, 263776927057, 263771185311, 263781397158", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
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
ANTILINK: process.env.ANTILINK || "delete", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "LY𝐑𝐈𝐂-V𝐈B𝐄Z", //  don't change 
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
