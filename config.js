require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.SESSION_ID= process.env.SESSION_ID || '{"noisekey":{"private":{"type":"Buffer","data":"0OU2GGS1r7RZzRcpi9f8hL+wdd6B4OrdDKuQvgK76Fc="},"public":{"type":"Buffer","data":"8Z6J7Sg0WuRICTVlkfHWUdILsAzkVBmpY/EjWj36LkA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eCX/k1fxkfver0srDtQfS7bdR+EPw5L7w4Zcyq0Cz3I="},"public":{"type":"Buffer","data":"nlYGPx3jsvNbCFTdPCLuRjOU914/d/scPhczJeSRuxA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iF9q5NRv4Zq/P/rwCWFicC5Kd7asGT6FJNU1HLCmwHo="},"public":{"type":"Buffer","data":"Xw05htYQB52GeAs6pdAjQd0qFYF+K+vJhArKUE3h3Fw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"gPMEZxth7nb22D6IJfhhfdKDg3pQwTZq6DZNl5u5b10="},"public":{"type":"Buffer","data":"4xCDUrWl3htw0O56qPSHT1upEzmENcv86N2iHLakGH4="}},"signature":{"type":"Buffer","data":"LAnegjEc2ObUD3Nq66nK1KLmked6aKo5bJUycaop2TzM7al9YQa3YhZvsNg6OUUz02dzpmWjzDiJ/WtYiuLFgw=="},"keyId":1},"registrationId":227,"advSecretKey":"HqcD9wAQ4V34OYDv70RVfZt1oiWnrK2a6WlcCikkjT4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"EKTAKLPY","me":{"id":"263787446219:9@s.whatsapp.net","name":"瓦些拉","lid":"72495273123986:9@lid"},"account":{"details":"CKOFrDQQ+4izxQYYBiAAKAA=","accountSignatureKey":"5TLn/uj7hjTsddrR4rh5W0nS2ED2idTc/qpxAeUB3xM=","accountSignature":"HtFO4SvdtBp9Re79umyAeD8Fj0MUS2k+DVspI5AlBBKHIsLG8UxSbavg+Pw0pWtUsDYbsHciQ8B+1VKS/R7WDg==","deviceSignature":"5EP+eyPJBK5PzeNBSnTtKBOfot7lKP6PDolC17ro+N3JdUjI3rUPbmKiztzq4joH3Y+zqmES0i/ij3y2jLXAjg=="},"signalIdentities":[{"identifier":{"name":"263787446219:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BeUy5/7o+4Y07HXa0eK4eVtJ0thA9onU3P6qcQHlAd8T"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CAIIBQ=="},"lastAccountSyncTimestamp":1756152978,"lastPropHash":"3gPUJk"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348109263390';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
