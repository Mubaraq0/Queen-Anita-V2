//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/iamblackhat0";
global.sudo = process.env.SUDO || "2348022444782";
global.owner = process.env.OWNER_NUMBER || "2348022444782";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "http://yocliq.com/media/profile/YoCliq_5b6a26c25a64c8ea90f2f18d799daa49.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNko4Z1VXekJobFZ2Z0NaaWZsMDY4U0xxTVk2S3oyTEpVbEVwMUVYeFUzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGkwQWUvZXV2emVzSHNzRFFUUThoeHBQSlhuZUhxMFNmYUtabnFjODloMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QjhPaFVOM3ppTnFWK256UUJoOE1KT3p4NEp5SGgvWm5UMTFpZDBSZDB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvSC9zdWR4b1g4NkhUYUI3MHUvejZVSUNuNDU2MU5KdVRUMHNYdDhYZW5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BVThUbHpMSEE4aTZ4aHh3MmFkeE9kR1ZwU00vYVliN09xdUMzVVdqMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhpY0hDVXYvc0dLUVptc2tOYkJqbWFqS3hvcWR2SEVsRWlmcGprSTA3Um89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUY0WGFnYkRGVTVWVFpIZUZzZDBlYmtpRFRkU3NYblFYVkJLQS90Q1FVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWJRSE9VNGlkUGdVSUtUZTkxVjBxT3k3NnNQM0YzUGxtUFlyQ2xFbU9rWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc2MllpZHBkQVdSc3RHYk9qdk43UmVqMk5wQ1BIVG9iWDZoUUFOdEthVEhJdU5NdUVYTEd0aUZ3Q0pDdkhVVko1M2RmdE1pd01wczN1c1hCejQycmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiIzNGZMTzRGL01DZCtDY3c3Qkl1OHZZK2xIYWpQRkc1R0pUaEdZWUdPM2pFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3SzFjeHBrQVNYRzc1eWowd2JrUkhnIiwicGhvbmVJZCI6Ijg0NGFmZGY0LTM1ZDctNDIwMS1iNzEzLTdiMjYzNTRiNjU1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsZEo3SDdxajArNms2SEhqVFhRNVlBTEwzdkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlNjV01mWnlvMzg0MGlQbVdaeXNsbkNsYjNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhWTU1MWjJIIiwibWUiOnsiaWQiOiIyMzQ4MDIyNDQ0NzgyOjgxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL0h0UEVHRU1lRnY3Z0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyTm5vc3htU2VKcnYwZmlWQ3ljN2V4ZXpsaVlONTZCbFI1azZLVm9tbmdVPSIsImFjY291bnRTaWduYXR1cmUiOiJXT3Y5TEVObHM5VXRvY1MwZmw0NmZtcDd6Zmg0dURsNW54M3dkMm9BMi9BVEpEVUlBR1plSjZEK3pwRXM5ZloyY0Qwa1kzR3ZLdVYwN3JCcXEzMTdCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicjd2bUw0UDgvYkg3Q0JjRjJHeFB0NEF0TTFKYlZIa0YzTjIxeXhIckdpNWtkOXgxUHgwR002WGRGKzhUNHZQSGdseVV1RUIvM0Qwa1JvQ1NBK3RxaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDIyNDQ0NzgyOjgxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF6WjZMTVprbmlhNzlINGxRc25PM3NYczVZbURlZWdaVWVaT2lsYUpwNEYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkwODYxNjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHZLIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "Meeee",
  packname: process.env.PACK_NAME || "Muba",
  botname: process.env.BOT_NAME || "QueenBEE",
  ownername: process.env.OWNER_NAME || "Muvaraq",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
