//CREATOR SC + BASE ORI : Zero YT 7 X ZyyXtrime

//FOLLOW SOSIAL MEDIA
//INSTAGRAM @spnx.fauzi
//YOUTUBE Hy Fauzi
//TIKTOK @inifauzi03
//GITHUB Fauzii

var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var ggs = require('google-it')
var googleImage = require('g-i-s')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var Exif = require('../mess/exif')
var exif = new Exif()
var request = require('request')
var translate = require('@vitalets/google-translate-api')
var fs = require('fs')
var hx = require("hxz-api")
var cheerio = require('cheerio')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var yts = require('yt-search')
var Math_js = require('mathjs')
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '©ZyyXtrime'
blocked = []
multi =false
nopref = false
allpref = true

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo
var apikey7 = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6289503657396@s.whatsapp.net"
var ownerNumber = [`${NomorOwner}@s.whatsapp.net`,"6285157740529@s.whatsapp.net"]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isUser = pendaftar.includes(sender)
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: '*[ SABAR ] Lagi di proses!!*',
success: 'Done...Jangan Lupa donasi',
wrongFormat: 'Format salah fitur salah, silahkan cek baik2 di list menu!!',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

var sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `Subscribe Hy Fauzi`, 
orderTitle: `Subscribe Hy Fauzi`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}
                      
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK ON BANG!!, SORRY GUA KICK SOALNYA ANTILINKNYA ON!");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           
case 'menu':
teks =`Hai ${pushname} ${ucapanWaktu}

Created : ZyyXtrime
User : ${pushname}
Total Pengguna : ${pendaftar.length}
Owner : Zyy [ Fauzi ]

Bot made in Indonesia [ 🇮🇩 ]
Bot bukan babu, bot hanya membantu!!
Youtube : https://youtube.com/channel/UC-iDjlzju2qTWjoyHmlrG_Q`
but = [
{ buttonId: `allmenu`, buttonText: { displayText: '🔴ALL MENU' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '🔴OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'allmenu':
teks =`Author : ZyyXtrime
Nama Bot : ${NameBot}
Nama Owner : ${NameOwner}
Prefix : ${prefix}
Lib : Baileys`
fake = `[ LIST ALL MENU!! ]

 [ Group Menu ]
 
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}welcome
• ${prefix}group
• ${prefix}linkgrup
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}setpp
• ${prefix}kick
• ${prefix}add
• ${prefix}demote
• ${prefix}promote

 [ Sticker Menu ]
 
• ${prefix}sticker
• ${prefix}toimg
• ${prefix}tomp3
• ${prefix}stickerwm
• ${prefix}dadu
• ${prefix}semoji
• ${prefix}tomp3
• ${prefix}tomp4
• ${prefix}robot
• ${prefix}balik
• ${prefix}bass
• ${prefix}gemuk
• ${prefix}detikvn
• ${prefix}detikvideo

 [ Owner Menu ]
 
• ${prefix}bc
• ${prefix}owner
• ${prefix}report
• ${prefix}runtime
• ${prefix}speed

 [ Eval Menu ]
 
• x
• >

 [ Islami Menu ]
 
• ${prefix}doaharian
• ${prefix}tahlil
• ${prefix}wirid
• ${prefix}ayatkursi
• ${prefix}bacaansholat
• ${prefix}niatsholat
• ${prefix}asmaulhusna

 [ Downloader Menu ]
 
• ${prefix}ytmp4
• ${prefix}ytmp3
• ${prefix}tiktokdl
• ${prefix}mediafire
• ${prefix}igfoto
• ${prefix}igtv

 [ Random Menu ]
 
• ${prefix}katabijak
• ${prefix}fakta
• ${prefix}motivasi
• ${prefix}quotes
• ${prefix}bucin
• ${prefix}pantun
• ${prefix}cerpen
• ${prefix}quotesanime

 [ Image Maker ]
 
• ${prefix}attp
• ${prefix}ttp
• ${prefix}blackpink
• ${prefix}neon
• ${prefix}matrix
• ${prefix}joker
• ${prefix}devil
• ${prefix}transformer
• ${prefix}thunder
• ${prefix}harry
• ${prefix}gradient

 [ Asupan Menu ]
 
• ${prefix}asupanbocil
• ${prefix}asupangheayubi
• ${prefix}asupanrika
• ${prefix}asupansantuy
• ${prefix}asupanukhty
• ${prefix}asupanvideo
• ${prefix}cewekchina
• ${prefix}cewekindonesia
• ${prefix}cewekkorea
• ${prefix}cewekmalaysia
• ${prefix}cewekthailand
• ${prefix}cewekvietnam
• ${prefix}asupanfilm
• ${prefix}asupanfilminfo

 [ Nsfw Menu ]
 
• ${prefix}ahegao
• ${prefix}ass
• ${prefix}bdsm
• ${prefix}cuckold
• ${prefix}cum
• ${prefix}ero
• ${prefix}femdom
• ${prefix}foot
• ${prefix}hentai
• ${prefix}jahy
• ${prefix}manga
• ${prefix}nsfwneko
• ${prefix}panties
• ${prefix}sfwneko
• ${prefix}tentacles
• ${prefix}xnxxsearch
• ${prefix}xnxxdl

 [ Primbon ]
 
• ${prefix}artinama
• ${prefix}cariresep

 [ Search Menu ]
 
• ${prefix}liriklagu
• ${prefix}wikisearch
• ${prefix}dafontsearch
• ${prefix}pinterest
• ${prefix}linkwa
• ${prefix}playstore

 [ Stalk Menu ]
 
• ${prefix}githubstalk
• ${prefix}igstalk

 [ Information Menu ]
 
• ${prefix}covid
• ${prefix}gempa
• ${prefix}tribunnews
• ${prefix}kompas

 [  NOTE ]

• JANGAN SPAM BOT!!!
• GUNAKAN BOT DENGAN BIJAK!!
• BOT BUKAN BABU, HANYA MEMBANTU!!
`
but = [
{ buttonId: `infobot`, buttonText: { displayText: 'INFO REALZI' }, type: 1 }
]
sendButLocation(from, teks, fake, fakeimg, but)
break
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp
teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Fauzi
*┃┃* Nama Owner : ${NameOwner}
*┃┃* Nama Bot : ${NameBot}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To Hy Fauzi(Creator)*
*┃◗ Thanks To All*
*┗━━━━━━━ •*`
                  but = [
{ buttonId: `owner`, buttonText: { displayText: 'OWNER SAYA' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('*Sudah aktif bang...!!!*')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('*Sukses mengaktifkan welcome!*')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('*Sudah di matikan sebelumnya...!!!*')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('Berhasil mematikan welcome!!')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome on', buttonText: {displayText: '📌 ON'}, type: 1},{buttonId: 'welcome off', buttonText: {displayText: '📌 OFF️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created by ZyyXtrime',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("SUKSES, ANTILINK AKTIF!!");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("ANTILINK DIMATIKAN!!");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("SUDAH AKTIF BANG...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("*ANTI VIRTEX AKTIF!!*");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("*ANTI VIRTEX MATI!!*");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`Sukses, membuka grup!!\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`Grup di tutup!\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*PERINTAH TELAH DI TERIMA, TELAH MENJADI ADMIN!!* :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`_PERINTAH DITERIMA_, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫??𝐦𝐚, berhenti menjadi admin! :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, MENURUNKAN!! : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥, mungkin target di private!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
zero.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬??𝐬 ??𝐢𝐜𝐤 𝐓𝐚𝐫𝐠??𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`Sukses change nama grup!\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `sewabot`, buttonText: {displayText: 'WARNING!!'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses, broadcast telah dikirim!!:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Subscribe YT Hy Fauzi`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa ZyyXtrime`)
fs.unlinkSync(ran)
})
break
case 'stickerwm':
case 'swm':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Zero | Gantenk`)
if (isMedia && !zer.message.videoMessage || isQuotedImage) {
ppp = `${args.join(' ')}`
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = ppp.split('|')[0]
const author1 = ppp.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
wmsti = body.slice(11)
if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = wmsti.split('|')[0]
const author1 = wmsti.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZyyXtrime',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'ITU NOMOR OWNER KU, JANGAN SPAM YAHH!!',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[*REPORT*]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/HyFauzi`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/spnx.fauzi`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@inifauzi03`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break

case 'script':
case 'sc':
teks =
`[ INFO SCRIPT ]
• Creator Bot : ZyyXtrime
• Youtube Creator : Hy Fauzi

[ LINK SCRIPT ]
CHAT OWNER KU😁

[ LINK YOUTUBE ]
• https://youtube.com/HyFauzi`
but = [
          { buttonId: `menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
]
        sendButLocation(from, teks, faketeks, fakeimg, but, { thumbnail: Buffer.alloc(0) })
break

// Islamic
case 'doaharian':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/doaharian?apikey=${apikey5}`)
resultnya = webapi.result
teks = `「 DOA HARIAN 」

Title : ${resultnya.Title}
Arabic : ${resultnya.Arabic}
Latin : ${resultnya.Latin}
Translate : ${resultnya.Translate}`
imagenya = await getBuffer(`https://telegra.ph/file/6478675805ee2c692777a.jpg`)
gbutsan = [{buttonId:`doaharian`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'tahlil':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/tahlil?apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 TAHLIL 」

Id : ${resultnya.id}
Title : ${resultnya.title}
Arabic : ${resultnya.arabic}
Translation : ${resultnya.translation}`
imagenya = await getBuffer(`https://telegra.ph/file/6478675805ee2c692777a.jpg`)
gbutsan = [{buttonId:`tahlil`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'wirid':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/wirid?apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 WIRID 」
Id  : ${resultnya.id}
Times : ${resultnya.times}
Arabic : ${resultnya.arabic}
Tnc : ${resultnya.tnc}`
imagenya = await getBuffer(`https://telegra.ph/file/6478675805ee2c692777a.jpg`)
gbutsan = [{buttonId:`wirid`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'ayatkursi':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/ayatkursi?apikey=${apikey5}`)
resultnya = webapi.result
teks =` 「 AYAT KURSI 」

Tafsir : ${resultnya.tafsir}
Translation : ${resultnya.translation}
Arabic : ${resultnya.arabic}
Latin : ${resultnya.latin}`
imagenya = await getBuffer(`https://telegra.ph/file/6478675805ee2c692777a.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'bacaansholat':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/bacaansholat?apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 BACAAN SHOLAT 」

Id : ${resultnya.id}
Name : ${resultnya.name}
Arabic : ${resultnya.arabic}
Latin : ${resultnya.latin}
Terjemahan : ${resultnya.terjemahan}`
imagenya = await getBuffer(`https://telegra.ph/file/6478675805ee2c692777a.jpg`)
gbutsan = [{buttonId:`bacaansholat`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'niatsholat':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/niatsholat?apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 NIAT SHOLAT 」

Id : ${resultnya.id}
Name : ${resultnya.name}
Arabic : ${resultnya.arabic}
Latin : ${resultnya.latin}
Terjemahan : ${resultnya.terjemahan}`
imagenya = await getBuffer(`https://telegra.ph/file/6478675805ee2c692777a.jpg`)
gbutsan = [{buttonId:`niatsholat`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'asmaulhusna':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/asmaulhusna?apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 ASMAUL HUSNA 」

Number : ${resultnya.number}
Latin : ${resultnya.latin}
Arab : ${resultnya.arab}
Translate Indonesia : ${resultnya.translate_id}
Translate English : ${resultnya.translate_en}`
imagenya = await getBuffer(`https://telegra.ph/file/6478675805ee2c692777a.jpg`)
gbutsan = [{buttonId:`asmaulhusna`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break

// Downloader
case 'ytmp4':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://youtu.be/tgXENzcKT5c`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/ytMp4?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 YOUTUBE MP4 」

Title : ${resultnya.title}
Quality : ${resultnya.title}
Size : ${resultnya.size}
Views : ${resultnya.views}
Likes : ${resultnya.likes}
Dislike : ${resultnya.dislike}
Channel : ${resultnya.channel}
Upload Date : ${resultnya.uploadDate}
Description : ${resultnya.desc}`
buttons = [{buttonId:`ytmp44 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`ytmp33 ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]
imageMessage = (await zero.prepareMessageMedia({url:resultnya.thumb},'imageMessage')).imageMessage
buttonsMessage = {contentText: teks,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
prot = await zero.prepareMessageFromContent(from,{buttonsMessage},{})
zero.relayWAMessage(prot)
break
case 'ytmp44':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://youtu.be/tgXENzcKT5c`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/ytMp4?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result
filenya = await getBuffer(resultnya.result)
zero.sendMessage(from, filenya, video, {mimetype: 'video/mp4', quoted: ftrol, caption: 'Done Nih... Jangan Lupa ZyyXtrime'})
break
case 'ytmp3':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://youtu.be/tgXENzcKT5c`)
url = args.join(" ")
webapi = await fetchJson(`https://zeroyt7-api.xyz/ytMp3?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 YOUTUBE MP3 」

Title : ${resultnya.title}
Size : ${resultnya.size}
Views : ${resultnya.views}
Likes : ${resultnya.likes}
Dislike : ${resultnya.dislike}
Channel : ${resultnya.channel}
Upload Date : ${resultnya.uploadDate}
Description : ${resultnya.desc}`
buttons = [{buttonId:`ytmp44 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`ytmp33 ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]
imageMessage = (await zero.prepareMessageMedia({url:resultnya.thumb},'imageMessage')).imageMessage
buttonsMessage = {contentText: teks,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
prot = await zero.prepareMessageFromContent(from,{buttonsMessage},{})
zero.relayWAMessage(prot)
break
case 'ytmp33':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://youtu.be/tgXENzcKT5c`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/ytMp3?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result
filenya = await getBuffer(resultnya.result)
zero.sendMessage(from, filenya, audio, {mimetype: 'audio/mp4', quoted: ftrol})
break
case 'tiktokdl':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://vt.tiktok.com/ZSeaV6Jfr/`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/tiktokvideo?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result.result
imagenya = await getBuffer(`https://telegra.ph/file/d1b72d4619eb17a02a0e4.jpg`)
gbutsan = [{buttonId:`nowm ${q}`,buttonText:{displayText:'NO WATERMARK🍂'},type:1},{buttonId:`wm ${q}`,buttonText:{displayText:'WATERMARK🍁'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Silahkan Pilih Jenis File Yang Ingin Di Download`,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case  'nowm':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://vt.tiktok.com/ZSeaV6Jfr/`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/tiktokvideo?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result.result
filenya = await getBuffer(resultnya.nowm)
zero.sendMessage(from, filenya, video, {mimetype: 'video/mp4', quoted:ftrol, caption: 'Done Nih Jangan Lupa ZyyXtrime'})
break
case 'wm':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://vt.tiktok.com/ZSeaV6Jfr/`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/tiktokvideo?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result.result
filenya = await getBuffer(resultnya.wm)
zero.sendMessage(from, filenya, video, {mimetype: 'video/mp4', quoted:ftrol, caption: 'Done Nih Jangan Lupa ZyyXtrime'})
break
case 'mediafire':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.mediafire.com/file/6z0mrx9lug37ynf/Z11.zip/file`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/mediafireD?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 MEDIAFIRE DOWNLOAD 」

File Berhasil Di Dapatkan

Nama : ${resultnya.nama}
Size : ${resultnya.size}
Link : ${resultnya.link}

Mohon Tunggu Beberapa Saat File Sedang Dikirim`
imagenya = await getBuffer(`https://telegra.ph/file/f3cf0f49f87727555ff06.jpg`)
gbutsan = [{buttonId:`downloadmediafire ${q}`,buttonText:{displayText:'DOWNLOAD FILE🌴'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'downloadmediafire':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.mediafire.com/file/6z0mrx9lug37ynf/Z11.zip/file`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/mediafireD?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result
filenya = await getBuffer(resultnya.link)
zero.sendMessage(from, filenya, document, {mimetype: resultnya.mime, filename: resultnya.nama, quoted: ftrol})
break
case 'igfoto':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.instagram.com/p/CXi1V1Hhiau`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/igfoto?link=${url}&apikey=${apikey5}`)
resultnya = webapi.result
hasilnya = await getBuffer(resultnya.link)
zero.sendMessage(from, hasilnya, image, {quoted: ftrol, caption: 'Done Nih... Jangan Lupa ZyyXtrime'})
break
case 'igtv':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.instagram.com/reel/CXlChjJA2sv`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/igtv?link=${url}&apikey=${apikey5}`)
resultnya = webapi.result
hasilnya = await getBuffer(resultnya.link)
zero.sendMessage(from, hasilnya, video, {mimetype: 'video/mp4', caption: 'Done Nih... Jangan Lupa ZyyXtrime'})
break

// Random
case 'katabijak':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/bijak?apikey=${apikey5}`)
resultnya = webapi.result
imagenya = await getBuffer(`https://telegra.ph/file/084422fdb3a26fbd5d81f.jpg`)
gbutsan = [{buttonId:`katabijak`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: resultnya,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'fakta':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/fakta?apikey=${apikey5}`)
resultnya = webapi.result
imagenya = await getBuffer(`https://telegra.ph/file/084422fdb3a26fbd5d81f.jpg`)
gbutsan = [{buttonId:`fakta`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: resultnya,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'motivasi':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/motivasi?apikey=${apikey5}`)
resultnya = webapi.result
imagenya = await getBuffer(`https://telegra.ph/file/084422fdb3a26fbd5d81f.jpg`)
gbutsan = [{buttonId:`motivasi`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: resultnya,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'quotes':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/quotes?apikey=${apikey5}`)
author = webapi.author
quotes = webapi.quotes
imagenya = await getBuffer(`https://telegra.ph/file/084422fdb3a26fbd5d81f.jpg`)
gbutsan = [{buttonId:`quotes`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Author : ${author}\n\nQuotes : ${quotes}`,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'bucin':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/bucin?apikey=${apikey5}`)
resultnya = webapi.result
teks =`Author : ${resultnya.Author}
Bucin : ${resultnya.Bucin}`
imagenya = await getBuffer(`https://telegra.ph/file/084422fdb3a26fbd5d81f.jpg`)
gbutsan = [{buttonId:`bucin`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'pantun':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/Pantun?apikey=${apikey5}`)
resultnya = webapi.result
teks =`Author : ${resultnya.Author}
Pantun : ${resultnya.Pantun}`
imagenya = await getBuffer(`https://telegra.ph/file/084422fdb3a26fbd5d81f.jpg`)
gbutsan = [{buttonId:`pantun`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'cerpen':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/cerpen?apikey=${apikey5}`)
resultnya = webapi.result
teks =`Title : ${resultnya.title}
Pengarang : ${resultnya.pengarang}
Kategori : ${resultnya.kategori}
Cerpen : ${resultnya.cerpen}`
imagenya = await getBuffer(`https://telegra.ph/file/084422fdb3a26fbd5d81f.jpg`)
gbutsan = [{buttonId:`cerpen`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'quotesanime':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/quotesAnime?apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =`🍂Link : ${x.link}
Karakter : ${x.karakter}
Anime : ${x.anime}
Episode : ${x.episode}
Up At : ${x.up_at}
Quotes : ${x.quotes}`
imagenya = await getBuffer(x.gambar)
}
gbutsan = [{buttonId:`quotesanime`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break

// Image Maker
case 'attp':
if (args.length < 1) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
teks = args.join(" ")
reply(mess.wait)
webapi = await getBuffer(`https://zeroyt7-api.xyz/attp?text=${teks}&apikey=${apikey5}`)
zero.sendMessage(from, webapi, sticker, {quoted: ftrol})
break
case 'ttp':
if (args.length < 1) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
teks = args.join(" ")
reply(mess.wait)
webapi = await getBuffer(`https://zeroyt7-api.xyz/ttp?text=${teks}&apikey=${apikey5}`)
zero.sendMessage(from, webapi, image, {quoted: ftrol, caption: 'Done Nih... Jangan Lupa ZyyXtrime'})
break
case 'blackpink':
case 'neon':
case 'matrix':
case 'joker':
case 'devil':
case 'transformer':
case 'thunder':
case 'harry':
case 'gradient':
if (args.length < 1) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/${command}?text=${teks}&apikey=${apikey5}`)
resultnya = await getBuffer(webapi.data)
zero.sendMessage(from, resultnya, image, {quoted : ftrol, caption: 'Done Nih... Jangan Lupa ZyyXtrime'})
break

// Asupan
case 'asupanbocil':
case  'asupangheayubi':
case 'asupanrika':
case 'asupansantuy':
case 'asupanukhty':
case 'asupan':
webapi = await fetchJson(`https://zeroyt7-api.xyz/${command}?apikey=${apikey5}`)
resultnya = webapi.result
videonya = await getBuffer(resultnya.url)
zero.sendMessage(from, videonya, video, {quoted: ftrol, caption: 'Done Nih... Jangan Lupa ZyyXtrime'})
break
case 'cewekchina':
case 'cewekindonesia':
case 'cewekjapan':
case 'cewekkorea':
case 'cewekmalaysia':
case 'cewekthailand':
case 'cewekvietnam':
webapi = await fetchJson(`https://zeroyt7-api.xyz/${command}?apikey=${apikey5}`)
resultnya = webapi.result
imagenya = await getBuffer(resultnya.url)
gbutsan = [{buttonId:`${command}`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Done Nih... Jangan Lupa ZyyXtrime`,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'asupanfilm':
if (args.length < 1) return reply(`Judul Film Nya Mana ?\nContoh : ${prefix + command} Japan`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/asupanfilm?query=${teks}&apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =`🍂Judul : ${x.judul}
Deskripsi : ${x.deskripsi}
Link : ${x.link}`
}
imagenya = await getBuffer(`https://telegra.ph/file/06c5d0f579f312338ab62.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'asupanfilminfo':
if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://asupanfilm.link/dJSctJjN00CZl5WahJHdtQmbh1CZl52bzlmcw1WatcmbpVmYt4WYt92dtU2cl5WYwFmaiwiIxIyW`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/asupanfilminfo?link=${url}&apikey=${apikey5}`)
resultnya = webapi.result
teks =`🌿Judul : ${resultnya.judul}`
imagenya = await getBuffer(`https://telegra.ph/file/06c5d0f579f312338ab62.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break

// Nsfw
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'hentai':
case 'jahy':
case 'manga':
case 'nsfwneko':
case 'panties':
case 'sfwneko':
case 'tentacles':
webapi = await fetchJson(`https://zeroyt7-api.xyz/${command}?apikey=${apikey5}`)
imagenya = await getBuffer(webapi.result)
gbutsan = [{buttonId:`${command}`,buttonText:{displayText:'LANJUT'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Done Nih... Jangan Lupa Subscribe Hy Fauzi`,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'xnxxsearch':
if (args.length < 1) return reply(`Judul Porno Nya Mana ?\nContoh : ${prefix + command} Japan`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/xnxxsearch?query=${teks}&apikey=${apikey5}`)
resultnya = webapi.result.result
for (var x of resultnya) {
teks =`Title : ${x.title}
Info : ${x.info}
Link : ${x.link}`
}
imagenya = await getBuffer(`https://telegra.ph/file/1011e2481970227f19309.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'xnxxdl':
if (args.length < 1) return reply(`Url Porno Nya Mana ?\nContoh : ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result.result
teks =`Title : ${resultnya.title}
Duration : ${resultnya.duration}
Video Type : ${resultnya.videoType}
Video Width : ${resultnya.videoWidth}
Video Height : ${resultnya.videoHeight}
Info : ${resultnya.info}`
imagenya = await getBuffer(resultnya.image)
gbutsan = [{buttonId:`xnxxlow ${q}`,buttonText:{displayText:'LOW🌱'},type:1},
{buttonId:`xnxxhigh ${q}`,buttonText:{displayText:'HIGH🌿'},type:1},
{buttonId:`xnxxhls ${q}`,buttonText:{displayText:'ULTRA🎄'},type:1}]
mhan = await zero.prepareMessage(from, imagenya, image, {thumbnail: imagenya})
buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: teks,
footerText: '©ZyyXtrime',
buttons: gbutsan,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
quoted: ftrol})
break
case 'xnxxlow':
if (args.length < 1) return reply(`Url Porno Nya Mana ?\nContoh : ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result.result
videonya = await getBuffer(resultnya.files.low)
zero.sendMessage(from, videonya, video, {mimetype: 'video/mp4', quoted: ftrol, caption: 'Done Nih... ZyyXtrime'})
break
case 'xnxxhigh':
if (args.length < 1) return reply(`Url Porno Nya Mana ?\nContoh : ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result.result
videonya = await getBuffer(resultnya.files.high)
zero.sendMessage(from, videonya, video, {mimetype: 'video/mp4', quoted: ftrol, caption: 'Done Nih...  ZyyXtrime'})
break
case 'xnxxhls':
if (args.length < 1) return reply(`Url Porno Nya Mana ?\nContoh : ${prefix + command} https://www.xnxx.com/video-x4urla9/jav_sexy_college_girl_smashed_by_horny_man`)
url = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/xnxxdl?url=${url}&apikey=${apikey5}`)
resultnya = webapi.result.result
videonya = await getBuffer(resultnya.files.HLS)
zero.sendMessage(from, videonya, video, {mimetype: 'video/mp4', quoted: ftrol, caption: 'Done Nih...  ZyyXtrime'})
break

// Primbon
case 'artinama':
if (args.length < 1) return reply(`Nama Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
nama = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/artinama?nama=${nama}&apikey=${apikey5}`)
resultnya = webapi.result
teks =`Artinama : ${resultnya.arti}`
imagenya = await getBuffer(`https://telegra.ph/file/5b84575ac8b46d9df4d8e.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'cariresep':
if (args.length < 1) return reply(`Nama Makanan Nya Mana ?\nContoh : ${prefix + command} Tahu`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/cariresep?query=${teks}&apikey=${apikey5}`)
resultnya = webapi.result.data
creator = webapi.result.creator
for (var x of resultnya) {
teks =`Creator : ${creator}
Judul : ${x.judul}
Link : ${x.link}`
}
imagenya = await getBuffer(`https://telegra.ph/file/a09d59c775080af9d92e6.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break

// Search
case 'liriklagu':
if (args.length < 1) return reply(`Judul Lagunya Nya Mana ?\nContoh : ${prefix + command} Aku Bukan Jodohnya`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/liriklagu?query=${teks}&apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =`Lirik : ${x.result}`
}
imagenya = await getBuffer(`https://telegra.ph/file/a7251fbe14afe9aaa5f56.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'wikisearch':
if (args.length < 1) return reply(`Judulnya Nya Mana ?\nContoh : ${prefix + command} Jokowi`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/wikisearch?query=${teks}&apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =`Judul : ${x.judul}
Hasil : ${x.wiki}`
imagenya = await getBuffer(x.thumb)
}
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'dafontsearch':
if (args.length < 1) return reply(`Judul Font Nya Mana ?\nContoh : ${prefix + command} Cartoon`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/dafontsearch?query=${teks}&apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =`Judul : ${x.judul}
Style : ${x.style}
Link : ${x.link}
Total : ${x.total}`
}
imagenya = await getBuffer(`https://telegra.ph/file/5678639203a5b00dd5108.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'pinterest':
if (args.length < 1) return reply(`Nama Gambar Nya Mana ?\nContoh : ${prefix + command} Sandrinna Michelle`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/pinterest?query=${teks}&apikey=${apikey5}`)
resultnya = webapi.result
author = resultnya.author
teks =`Author : ${author}`
imagenya = await getBuffer(resultnya.url)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'linkwa':
if (args.length < 1) return reply(`Nama Group Nya Mana ?\nContoh : ${prefix + command} Bot Whatsapp`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/linkwa?nama=${teks}&apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =` Name : ${x.nama}
Link : ${x.link}`
}
imagenya = await getBuffer(`https://telegra.ph/file/0061b50549541483c84df.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'playstore':
if (args.length < 1) return reply(`Nama Aplikasi Nya Mana ?\nContoh : ${prefix + command} Tiktok`)
teks = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/playstore?name=${teks}&apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =` Nama : ${x.name}
Link : ${x.link}
Developer : ${x.developer}
Link Developer : ${x.link_dev}`
}
imagenya = await getBuffer(`https://telegra.ph/file/e4567c743dde7e1ec0923.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break

// Stalk
case 'githubstalk':
if (args.length < 1) return reply(`Username Nya Mana ?\nContoh : ${prefix + command} Zero-YT7`)
username = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/ghstalk?username=${username}&apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 GITHUB STALK 」

Login : ${resultnya.login}
Id : ${resultnya.id}
Type : ${resultnya.type}
Site Admin : ${resultnya.site_admin}
Name : ${resultnya.name}
Company : ${resultnya.company}
Blog : ${resultnya.blog}
Location : ${resultnya.location}
Email : ${resultnya.email}
Hireable : ${resultnya.hireable}
Bio : ${resultnya.bio}
Twitter Username : ${resultnya.username}
Public Repos : ${resultnya.public_repos}
Public Gists : ${resultnya.public_gists}
Followers : ${resultnya.followers}
Following : ${resultnya.following}
Created At : ${resultnya.created_at}
Updated At : ${resultnya.updated_at}
Url : ${resultnya.url}
Followers Url : ${resultnya.followers_url}
Following Url : ${resultnya.following_url}
Gists Url : ${resultnya.gists_url}
Starred Url : ${resultnya.starred_url}
Subscription Url : ${resultnya.subscription_url}
Organizations Url : ${resultnya.organizations_url}
Repos Url : ${resultnya.repos_url}
Events Url : ${resultnya.events_url}
Received Events Url : ${resultnya.received_events_url}`
imagenya = await getBuffer(resultnya.avatar_url)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'igstalk':
if (args.length < 1) return reply(`Username Nya Mana ?\nContoh : ${prefix + command} Zero_YT7`)
username = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/igstalk?username=${username}&apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 INSTAGRAM STALK 」

Creator : ${resultnya.creator}
Username : ${resultnya.username}
Full Name : ${resultnya.fullname}
Verified : ${resultnya.verified}
Video Count Reel : ${resultnya.video_count_reel}
Followers : ${resultnya.followers}
Follow : ${resultnya.follow}
Is Bussines : ${resultnya.is_bussines}
Is Professional : ${resultnya.is_professional}
Category : ${resultnya.category}`
imagenya = await getBuffer(resultnya.thumbnail)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break

// Information
case 'covid':
if (args.length < 1) return reply(`Negara Nya Mana ?\nContoh : ${prefix + command} indonesia`)
negara = args.join(" ")
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/covid?negara=${negara}&apikey=${apikey5}`)
resultnya = webapi.result.result
author = webapi.result.author
teks =`「 INFO COVID 」

Creator : ${author}
Kasus : ${resultnya.kasus}
Meninggal : ${resultnya.meninggal}
Sembuh : ${resultnya.sembuh}`
imagenya = await getBuffer(`https://telegra.ph/file/5756d727270774159c37e.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'gempa':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/gempa?apikey=${apikey5}`)
resultnya = webapi.result
teks =`「 INFO GEMPA 」

Waktu : ${resultnya.Waktu}
Lintang : ${resultnya.Lintang}
Bujur : ${resultnya.Bujur}
Magnitudo : ${resultnya.Magnitudo}
Kedalaman : ${resultnya.Kedalaman}
Wilayah : ${resultnya.Wilayah}`
imagenya = await getBuffer(`https://telegra.ph/file/e21cf99f19a3687d0f2ca.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'tribunnews':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/tribunnews?apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =`「 INFO TRIBUN NEWS 」

Title : ${x.title}
Desc : ${x.desc}
Date : ${x.date}
Link : ${x.link}`
imagenya = await getBuffer(x.thumb)
}
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break
case 'kompas':
reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/kompas?apikey=${apikey5}`)
resultnya = webapi.result
for (var x of resultnya) {
teks =`「 INFO KOMPAS 」

Title : ${x.title}
Desc : ${x.desc}
Date : ${x.date}
Link : ${x.link}`
}
imagenya = await getBuffer(`https://telegra.ph/file/a1ab973c4b53ac0586d13.jpg`)
zero.sendMessage(from, imagenya, image, {quoted: ftrol, caption: teks})
break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}