const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MD~H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaDaRJaIiBhAV3FDAEif6IYUUU1aTRIUO/70Dq6qrH2Z6anhKcjn33HvOvT9AXuAKzVAD1B+gJPgKKeqWtCkRUIFeH4+IgD6IIIVABcHk7A6ZhCnj6jXVMk5K25HSyPhOZHIQ9i3LJ2h6WN/rXfECHn1Q1ocUh38ATOcraTrcZxfrPJIicZRcrzTfkGBmraNpvF76/sGdePsAsuYLeHSIEBOcx2Z5QhkiMJ2hxoGYfI1+6AhLrqh9n9sw8r5GxKmCYnSir1tno+mRic1mtDG0cpzHX6M/5cJQZ5dJEjgz5ehjxs74cE5qRsazohf3mAu339v1vHrW49EHFY5zFFkRyimmzdfrbuOrYrOiaOx652VZzBJvPz01s3mrt/r1dS3Zk9lEKIdzzvoa8ZCdN6wphnQ5YTSxGXgEIpZ1Nqita+Zy8kN+3ApIiWAy+J24Qz68kvyfumsGu/XtwU4/K4tUYQ88GfB1Pl3JB7b1qilDJOe8ixh0Sb5oGzdwSLtc8CydsrpxGmbCrXD3lUBWfLKztT03ueXyfLW+NeYnfUhr8ieW5VyJY0862eG6LAcDudktmZa1i9XFiKT1ze/VQbvAzVTRVpLI3Fp+aAfLxcXP/JM7PinV3Ux79tlub+sWHZl4Gu2znaa9PDNKUGNFQOUefUBQjCtKIMVF/tzj+gBGVxeFBNFndcHWuJ83ZJf0jtzKWyplpk9SPzjO0pF/Swd7V4IcPKOgXcytF9AHJSlCVFUomuKKFqRZoKqCMaqA+vf3PsjRnb7p1kUTuD44YlJRP6/LtIDRh6gfhzAMizqnbpOHRrdABKjs5zaiFOdx1ZWxziEJT/iKjBOkFVCPMK3QrwQRQRFQKanRr6Y1iqiruzgfWxN77IA+yJ564AiogJeG7JAdSgLHq4L0V/Xt1qHCsvyWIwr6IIfdZeBmRYIR6IP0+UpgBZYbyjwny6LwfNjtP37x7eAjRCFOK6ACw2qtAlZTc8F7nJxMJpoZa0asgc/8PnzyJsRuxAUerWYbe90zD/IoWNWHXG8X1nJwG9Ol73IzsQkN+e76L/8AAlSAt2mRMbp7Uda10lSBOd9dynC7EZtVyl1NPUkbKGee3TKOszjmpbPdZL17lF3jQy570sg5y7q9P4leNjQOy2bgyrvGWL900SJ0xSH6PdiZnw9dOZr7M2Wo0XFUyrXvXc66EGyFrQjl3f3ixLs9L48Lxpwsktganr1InBRHU7iFMPYL20qV9iKUp/MmCe4lvGHj3cHPDkrfJxd+mqtTrvs9YvQcBO8S/ZeSb7w7v7GP/m8Q75PlX7pT396UV1M6GInrO6cJo/Ejkom3sDVGaKEfvK1J3TrMtevCT8Hj8b0PyhTSY0EyoIIqO0DQB6SoO/da+bH4QyRDYy19HVtd1imsqPbZER7OUEVhVgKVk4YiJ/CSqLzdckhRTmF1AipwXhNR79zdaGXpUkg/+gto3Wft9uDxExEfSZR6BwAA',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐌.J",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "27781242411", 
    SUDO_NUMBERS : process.env.SUDO_NUMBERS || "27781242411",
    BOT_NAME : process.env.BOT_NAME || '𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗',
    FOOTER : process.env.FOOTER || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ',
    CAPTION : process.env.CAPTION || '𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗',
    VERSION: process.env.VERSION || '4.0.0',
    BOT_PIC : process.env.BOT_PIC || 'https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg',            
    MODE: process.env.MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'false',
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala",
    DM_PRESENCE : process.env.DM_PRESENCE || 'online', // recording/typing/online/offline
    GC_PRESENCE : process.env.GC_PRESENCE || 'online', // recording/typing/online/offline
    CHATBOT : process.env.CHATBOT || 'false', // can be true/audio/false   
    CHATBOT_MODE : process.env.CHATBOT_MODE || 'inbox', // can be inbox/groups/allchats
    STARTING_MESSAGE : process.env.STARTING_MESSAGE || "true",
    ANTIDELETE : process.env.ANTIDELETE || 'indm', // inchat/indm/false
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'false',
    ANTICALL : process.env.ANTICALL || 'false', // (decline/true)/block/false
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'false',
    ANTILINK : process.env.ANTILINK || 'delete', // or delete or kick or true
    AUTO_LIKE_STATUS : process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || 'true',
    STATUS_LIKE_EMOJIS : process.env.STATUS_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",   
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT || "*ʏᴏᴜʀ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*",             
    AUTO_REACT : process.env.AUTO_REACT || 'false',
    AUTO_REPLY : process.env.AUTO_REPLY || 'false',
    AUTO_READ_MESSAGES : process.env.AUTO_READ_MESSAGES || 'false', // true/commands/false
    AUTO_BIO : process.env.AUTO_BIO || 'false',
    AUTO_BLOCK: process.env.AUTO_BLOCK || '212,233',
    YT: process.env.YT || 'youtube.com/@princetechn11',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363322606369079@newsletter', //dont change
    NEWSLETTER_URL: process.env.NEWSLETTER_URL || 'https://whatsapp.com/channel/0029Vakd0RY35fLr1MUiwO3O',
    BOT_REPO: process.env.BOT_REPO || 'Mayelprince/PRINCE-MDXI',
    PACK_NAME: process.env.PACK_NAME || '𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗',
    PACK_AUTHOR: process.env.PACK_AUTHOR || '𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇'
};

let fileName = require.resolve(__filename);
fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);
    console.log(`Writing File: ${__filename}`);
    delete require.cache[fileName];
    require(fileName);
});
