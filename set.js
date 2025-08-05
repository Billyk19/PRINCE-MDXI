
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA61UaY+jOBD9L/5KNOEwp9TSACGBHJ2DXJ3VfnDAEIfLMZCEHuW/j0i6Z1qr2ZleaflkylbVe69e1TeQF6TEI9wA4xugjJxRhdtj1VAMDGDVUYQZ6IAQVQgYoJxQzCx+u9/m8mZpe9Ja1YYxxbq7PO80fwRnW9EWp7OgXz6BWwfQep+S4DcJey/j3fnE2BpqWhSd/K5eN5maDNyBEIb7CK9eTT3vb/cC8Z7Arc2ICCN57NADzjBD6Qg3M0TY5+BPzXJNX67BXqfXzQWqkPrDgiw5Kg95p16srig5LPxNcl6bn4NfQi6DLn3ltq51vKp7daY77NnPzs34tLS6qRI4eATlSMjjB/ySxDkOvRDnFamaT+sOJyN7Kc5f86W9ENJq6y2dsCdp+CrPNokiYP08PkWZKx7TyeeAhxe3qe3ckiBZ+ePrSdJfk0BXfAJde4ufJ7yi7pZBVg5fzY/AZ+zdK8l/0T2xPEdn22fJjl7MVFG9hTqcO2d4UZ8TrZbDZqP1/bkLzXT+OfiRlO71KE7pee3IfHxW6u4mmOz2OwyhOx80r2M/PpxfhqJ/+QkfVTX7HcqTsocTaydysns4mmIhHiMapJyr2Jo2zHtjVytMzws20YI7pvnc4iKx4KeHQLoEF2mcdVlmr/lDQkOO5SzSp4thvrEuT3dGCW68EBjCrQMYjklZMVSRIr/HYAeg8OzjgOHqri6wJmLhOyPFw4KyEFTErAxJh+NqLnN+bDkTxe3zjNjZgs2fQAdQVgS4LHHokrIqWDPBZYliXALjr3ujWs4MZ0WFhyQEBhBVVdNkASqi8LX8cjmgqkSUfslxBTogYkU2wcCoWI074P7elFRHtS1HEHtCj5c0VYJqT7dFKEMNalBuCWaPmkuS4bJCGQWGoMoQCrKuS7fO/wJDsKQ+lBVBdDRbVQRVthRbEC1bVhTJFvrCH2H83QE5vlYPE7fSS0IHRISV1SqvaVqg8N3h75coCIo6r/wmD+z2gBkwPoRxVZE8LltidY5YcCBnbLc8gBGhtMQ/uo0ZDt+5vG0wuwhbE8LhSt1KCxu02NtE/5TG+IU46eORoimKpCkCL8tQ5w3haxu//YDXZgtxhUhaAgPY08w7FrzjTMmgCeaDgenEph2b4Ced9xl5mHDHs2Lcb+QXOvKnK45Xr6cs4YV6sdwdVXKAa50eeSoKbq49/SIJMMAcbboXmeeosmNCMh8sG+663z1r82Ipzs5rxU9ml8WhUPunnVrbQclG+qt28kq6G+y79tSBFqzRIqs2iWCe3O1xRYJBz3xqq4X4TAL8sZgfSvONFDJG1nUXxYQ7st2Un5bZaR0pdLXTVMUflVZv5rEw45Eyl44LEupiZdWOuV9NitPFGhXTdMZnXO9qmcd6rL1P7317pG9bm7wNFrn/RgTfl2CO2vb9qXEP2K27+FvnQ4a3pfovi8nahCPFvgb1ZuQnx3RWTTVE6fPzPlmJLxwscD9CL/oorBZyF9xam9MUVVHBMmAAlIesICHoAFbUrV29PCp+U8w2ec+MH7xTVFbmzxH4xVRpyuPVjBXUReWhlWCtqqdV6+fGpNSvUPU+UcBsv5mUg9t35baDz3kIAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
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
ANTICALL: process.env.ANTICALL || "false",
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
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
