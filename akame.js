/**
 * Base By Dika Ardnt.
 * Recode By GuaAbuzz
 * Kalau Mau Recode, Edit Aja Di confiq.js
 * Mumpung Lagi Baik Ini Gua Share No Enc Buat Kalian
 * Contact Me On wa.me/6289636827082
 * Follow https://github.com/Abuzzpoet
 */

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const hx = require('hxz-api')
const fdl = require("caliph-api")
const bochil = require('@bochilteam/scraper')
const alya = require('./lib/null.js')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/myfunc')

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    group: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
}
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let tebakbendera = db.data.game.bendera = []
let tebakbendera2 = db.data.game.bendera2 = []
let tebakkabupaten = db.data.game.kabupaten = []
let tebakkimia = db.data.game.kimia = []
let tebakasahotak = db.data.game.asahotak = []
let tebaksiapakahaku = db.data.game.siapakahaku = []
let tebaksusunkata = db.data.game.susunkata = []
let tebaktekateki = db.data.game.tekateki = []
let vote = db.data.others.vote = []

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = akame = async (akame, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await akame.decodeJid(akame.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await akame.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

        //Time Menuju Ulang Tahun Untuk GuaAbuzz :)
        const HBD = new Date('July 17, 2023 06:00:00').getTime();
        const sekarang = new Date().getTime();
        const Selisih = HBD - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
        const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
        const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
        
        //buttons Tambahan
        const ntiktok = ('© GuaAbuzz\nTikTok/Github :\nhttps://github.com/Abuzzpoet')  //ubah di config biar ngk emror
        const ini_mark = `0@s.whatsapp.net`
        const ownernya = ownernomer + '@s.whatsapp.net'
        
//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
	    const ftroli = {
    key: {
        fromMe: false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "status@broadcast"
    },
    "message": {
        orderMessage: {
            itemCount: 2022,
            status: 200,
            thumbnail: thumb,
            surface: 200,
            message: `${ttname}`,
            orderTitle: 'GuaAbuzz',
            sellerJid: '0@s.whatsapp.net'
        }
    },
    contextInfo: {
        "forwardingScore": 999,
        "isForwarded": true
    },
    sendEphemeral: true
}

const fdoc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        documentMessage: {
            title: `${ttname}`,
            jpegThumbnail: thumb,
        }
    }
}
const fvn = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "audioMessage": {
            "mimetype": "audio/ogg; codecs=opus",
            "seconds": 359996400,
            "ptt": "true"
        }
    }
}

const ftextt = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": `${ttname}`,
            "title": `${botname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const ftoko = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "productMessage": {
            "product": {
                "productImage": {
                    "mimetype": "image/jpeg",
                    "jpegThumbnail": thumb,
                },
                "title": `${ttname}`,
                "description": `${botname}`,
                "currencyCode": "IDR",
                "priceAmount1000": "1000000000000000000",
                "retailerId": `${ttname}`,
                "productImageCount": 1
            },
            "businessOwnerJid": `0@s.whatsapp.net`
        }
    }
}

const fgif = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `${ttname}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'gifPlayback': 'true',
            'caption': `${ttname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const fgclink = {
    key: {
        participant: "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
        "groupInviteMessage": {
            "groupJid": "6288213840883-1616169743@g.us",
            "inviteCode": "m",
            "groupName": `${ttname}`,
            "caption": `${ttname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const fvideo = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `${ttname}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'caption': `${ttname}`,
            'jpegThumbnail': thumb,
        }
    }
}

const floc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        locationMessage: {
            name: `${ttname}`,
            jpegThumbnail: thumb,
        }
    }
}

const floc2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "liveLocationMessage": {
            "title": `${ttname}`,
            "h": `Hmm`,
            'jpegThumbnail': thumb,
        }
    }
}

const fkontak = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        'contactMessage': {
            'displayName': `${ttname}`,
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6289636827082:6289636827082\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            'jpegThumbnail': thumb,
            thumbnail: thumb,
            sendEphemeral: true
        }
    }
}

const fakestatus = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": `${ttname}`,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": thumb,
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
}
        //END

        //member
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
        let picaks = [flaming, fluming, flarun, flasmurf, mehk, awog, mohai, mhehe]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]
        
        let klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
	    let kloadq = klqor[Math.floor(Math.random() * klqor.length)]
	
    	let filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
	    let filsk = filsj[Math.floor(Math.random() * filsj.length)]

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = true
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateLocation' in setting)) setting.templateLocation = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: true,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
                templateLocation: false,
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!akame.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            akame.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

    // total hit
        global.hit = {}
        if (isCmd) {
           data = await fetchJson('https://api.countapi.xyz/hit/AkameV2.0/visits')
           jumlahcmd = `${data.value}`
           dataa = await fetchJson(`https://api.countapi.xyz/hit/AkameV2.0${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
           jumlahharian = `${dataa.value}`
    }
    
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await akame.updateProfileStatus(`I am Akame-Bot | Aktif Selama ${uptime} | Mode : ${akame.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length} | Jangan Telp Bot | © Created GuaAbuzz`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	}
	
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: akame.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, akame.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        akame.ev.emit('messages.upsert', msg)
        }
	    
        if (('family100' + m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            akame.sendText(m.chat, caption, fakestatus, {
                contextInfo: {
                    mentionedJid: parseMention(caption)
                }
            }).then(mes => {
                return _family100['family100' + m.chat].pesan = mesg
            }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }

        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak asahotak',
                    buttonText: {
                        displayText: '⌲ Tebak Asah Otak'
                    },
                    type: 1
                }], `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak siapakahaku',
                    buttonText: {
                        displayText: '⌲ Tebak Siapkah Aku'
                    },
                    type: 1
                }], `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak susunkata',
                    buttonText: {
                        displayText: '⌲ Tebak Susun Kata'
                    },
                    type: 1
                }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak bendera',
                    buttonText: {
                        displayText: '⌲ Tebak Bendera'
                    },
                    type: 1
                }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak bendera2',
                    buttonText: {
                        displayText: '⌲ Tebak Bendera 2'
                    },
                    type: 1
                }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kabupaten',
                    buttonText: {
                        displayText: '⌲ Tebak Kabupaten'
                    },
                    type: 1
                }], `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak susunkata',
                    buttonText: {
                        displayText: '⌲ Tebak Susun Kata'
                    },
                    type: 1
                }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kimia',
                    buttonText: {
                        displayText: '⌲ Tebak Kimia'
                    },
                    type: 1
                }], `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak tekateki',
                    buttonText: {
                        displayText: '⌲ Tebak Teka Teki'
                    },
                    type: 1
                }], `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak lagu',
                    buttonText: {
                        displayText: '⌲ Tebak Lagu'
                    },
                    type: 1
                }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak gambar',
                    buttonText: {
                        displayText: '⌲ Tebak Gambar'
                    },
                    type: 1
                }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kata',
                    buttonText: {
                        displayText: '⌲ Tebak Kata'
                    },
                    type: 1
                }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete caklontong[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak lontong',
                    buttonText: {
                        displayText: '⌲ Tebak Lontong'
                    },
                    type: 1
                }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kalimat',
                    buttonText: {
                        displayText: '⌲ Tebak Kalimat'
                    },
                    type: 1
                }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak lirik',
                    buttonText: {
                        displayText: '⌲ Tebak Lirik'
                    },
                    type: 1
                }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak tebakan',
                    buttonText: {
                        displayText: '⌲ Tebak Tebakan'
                    },
                    type: 1
                }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ntiktok, fakestatus)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //Anti Link
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await akame.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link YouTube
        if (db.data.chats[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                m.reply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.chats[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                m.reply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.data.chats[m.chat].antivirtex) {
            if (budy.length > 3500) {
                m.reply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
                m.reply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        //TicTacToe
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await akame.sendText(room.x, str, fakestatus, {
                mentions: parseMention(str)
            })
            await akame.sendText(room.o, str, fakestatus, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    akame.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, fgclink)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                akame.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, fakestatus, {
                    mentions: [roof.p, roof.p2]
                })
                if (!roof.pilih) akame.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, fgclink)
                if (!roof.pilih2) akame.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, fgclink)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) akame.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        akame.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, fgclink)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) akame.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) akame.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                akame.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), fakestatus, {
                    mentions: [roof.p, roof.p2]
                })
                delete this.suit[roof.id]
            }
        }

        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        switch (command) {
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = +new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    m.reply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await akame.sendText(room.x, str, fakestatus, {
                        mentions: parseMention(str)
                    })
                    await akame.sendText(room.o, str, fakestatus, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        akame.sendText(m.chat, `Berhasil delete session TicTacToe`, fgclink)
                    } else if (!this.game) {
                        m.reply(`Session TicTacToe🎮 tidak ada`)
                    } else throw '?'
                } catch (e) {
                    m.reply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await akame.sendText(m.chat, caption, fakestatus, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) akame.sendText(m.chat, `_Waktu suit habis_`, fgclink)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
            break
            //Salam
            case 'Assalamualaikum':
            case 'assalamualaikum':
            case 'Assalamualaikum Wr. Wb': {
               goblok = fs.readFileSync('./media/sound/salam.mp3')
               akame.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})}
            break
            case 'bot': {
               list = ['./media/sound/oy.mp3','./media/sound/kenapa.mp3','./media/sound/iya.mp3']
               random = list[Math.floor(Math.random() * list.length)]
               goblok = fs.readFileSync(random)
               akame.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})}
            break
            //Thx
            case 'thanks':
            case 'makasih':
            case 'thx':
            case 'tengkiyu':
            case 'terima kasih':
            case 'Terima Kasih':
            case 'Terima kasih': {
                m.reply(`Sama-Sama Kak ${pushname}`)
                }
                break
                //Case Cek Prefix
            case 'cekpref':
            case 'cekprefix': {
                m.reply('Bot Ini Menggunakan Multi Prefix Dan No Prefix')
                }
                break
                //Balas Cepat
            case 'p': {
                m.reply(`Ketik #menu Untuk Melihat List Menu Bot`)
                }
                break
                // Kalau Mau Nambahin Gpp Tapi Jangan Diubah Ya Anj
            case 'tqtt':
            case 'tqto':
            case 'thanksto': {
                anu = `⭔ Allah SWT.
⭔ Ortu Saya.
⭔ DikaArdnt (Author).
⭔ GuaAbuzz (Recode).
⭔ SkyzooDev.
⭔ Sanzy YT.
⭔ Fatih A.
⭔ Nurutomo.
⭔ Mhankbarbar.
⭔ ZeeoneOfc.
⭔ Penyedia Module.
⭔ Penyedia Res Api's.
⭔ All My Friends.

• Library : *Baileys-MD*.
• Prefix : ( ${prefix} )
• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
• Wib : ${wib}
• Wita : ${wita}
• Wit : ${wit}`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'command': {
               let simple = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO USER 」
│└─────────────┈❖
│ Name : ${pushname}
│ Number : ${m.sender.split('@')[0]}
│ Status : ${isCreator ? 'Owner' : 'User'}
│ User : ${Object.keys(global.db.data.users).length}
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}
│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Platform : ${os.platform()}
│ Runtime :
│  ${runtime(process.uptime())}
│ Language : Javascript
│ Lib : Baileys-md
└┬─────────────┈❖
┌┤「 INFO TIME 」
│└─────────────┈❖
│ Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│ Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
│ Menuju HBD GuaAbuzz :
│  ${menuju}
│ WIB : ${wib}
│ WITA : ${wita}
│ WIT : ${wit}
└──────────────┈❖`
                let sections = [
                {
                title: "All Menu Bot >_<",
                rows: [
                {title: "⌲ 「 All Menu 」", rowId: `${prefix}allmenu`, description: `Menampilkan All Menu`}
                ]
                },
                {
                title: "List Menu Simpel Bot >_<",
                rows: [
                {title: "⌲ 「 Anonymous Chat Menu 」", rowId: `${prefix}anonymousmenu`, description: `Menampilkan Anonymous Chat Menu`},
                {title: "⌲ 「 Anime Menu 」", rowId: `${prefix}animemenu`, description: `Menampilkan Anime Menu`},
                {title: "⌲ 「 Asupan Menu 」", rowId: `${prefix}asupanmenu`, description: `Menampilkan Asupan Menu`},
                {title: "⌲ 「 Convert Menu 」", rowId: `${prefix}convertmenu`, description: `Menampilkan Convert Menu`},
                {title: "⌲ 「 Download Menu 」", rowId: `${prefix}downloadmenu`, description: `Menampilkan Download Menu`},
                {title: "⌲ 「 Database Menu 」", rowId: `${prefix}databasemenu`, description: `Menampilkan Database Menu`},
                {title: "⌲ 「 Ephoto Menu 」", rowId: `${prefix}ephotomenu`, description: `Menampilkan Ephoto Menu`},
                {title: "⌲ 「 Group Menu 」", rowId: `${prefix}groupmenu`, description: `Menampilkan Group Menu`},
                {title: "⌲ 「 Game Menu 」", rowId: `${prefix}gamemenu`, description: `Menampilkan Game Menu`},
                {title: "⌲ 「 Islamic Menu 」", rowId: `${prefix}islamicmenu`, description: `Menampilkan Islamic Menu`},
                {title: "⌲ 「 Kerang Menu 」", rowId: `${prefix}kerangmenu`, description: `Menampilkan Kerang Menu`},
                {title: "⌲ 「 Meme Menu 」", rowId: `${prefix}mememenu`, description: `Menampilkan Meme Menu`},
                {title: "⌲ 「 Main Menu 」", rowId: `${prefix}mainmenu`, description: `Menampilkan Main Menu`},
                {title: "⌲ 「 Owner Menu 」", rowId: `${prefix}ownermenu`, description: `Menampilkan Owner Menu`},
                {title: "⌲ 「 Primbon Menu 」", rowId: `${prefix}primbonmenu`, description: `Menampilkan Primbon Menu`},
                {title: "⌲ 「 Photo Editor Menu 」", rowId: `${prefix}photoeditormenu`, description: `Menampilkan Photo Editor Menu`},
                {title: "⌲ 「 Quotes Menu 」", rowId: `${prefix}quotesmenu`, description: `Menampilkan Quotes Menu`},
                {title: "⌲ 「 Random Menu 」", rowId: `${prefix}randommenu`, description: `Menampilkan Random Menu`},
                {title: "⌲ 「 Sticker Menu 」", rowId: `${prefix}stickermenu`, description: `Menampilkan Sticker Menu`},
                {title: "⌲ 「 Search Menu 」", rowId: `${prefix}searchmenu`, description: `Menampilkan Search Menu`},
                {title: "⌲ 「 Stalk Menu 」", rowId: `${prefix}stalkmenu`, description: `Menampilkan Stalk Menu`},
                {title: "⌲ 「 Text Pro Menu 」", rowId: `${prefix}textpromenu`, description: `Menampilkan Text Pro Menu`},
                {title: "⌲ 「 Voice Changer Menu 」", rowId: `${prefix}voicemenu`, description: `Menampilkan Voice Changer Menu`},
                {title: "⌲ 「 Webzone Menu 」", rowId: `${prefix}webzonemenu`, description: `Menampilkan Webzone Menu`},
                {title: "⌲ 「 Wallpaper Menu 」", rowId: `${prefix}wallpapermenu`, description: `Menampilkan Wallpaper Menu`}
                ]
                },
                {
                title: "Rules Bot >_<",
                rows: [
                {title: "⌲ 「 Rules Bot 」", rowId: `${prefix}rules`, description: `Klik Untuk Melihat Rules Bot`}
                ]
                },
                {
                title: "Open Jasa Sewabot >_<",
                rows: [
                {title: "⌲ 「 Sewa Bot 」", rowId: `${prefix}sewabot`, description: `Klik Untuk Melihat Harga Sewabot`}
                ]
                },
                {
                title: "Open Donasi >_<",
                rows: [
                {title: "⌲ 「 Open Donasi 」", rowId: `${prefix}donasi`, description: `Bantu Support Creator Guys`}
                ]
                },
                {
                title: "Info Tentang Bot? >_<",
                rows: [
                {title: "⌲ 「 Info Bot 」", rowId: `${prefix}ping`, description: `Klik Untuk Melihat Info Bot`}
                ]
                },
                {
                title: "Info Tentang Owner? >_<",
                rows: [
                {title: "⌲ 「 Chat Owner 」", rowId: `${prefix}owner`, description: `Menampilkan Nomor WhatsApp Owner`}
                ]
                },
                {
                title: "Thanks To >_<",
                rows: [
                {title: "⌲ 「 Contributor 」", rowId: `${prefix}tqtt`, description: `Menampilkan Nama Teman - Teman Saya Yang Sudah Membantu Merakit Bot Ini !!`}
                ]
                }
                ]
                akame.sendListMsg(m.chat, simple, ntiktok, `Hello Everyone !`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, floc)
            }
            break
            case 'sc':
            case 'script': {
               goblok = fs.readFileSync('./media/sound/sc.mp3')
               akame.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})}
            break
            case 'tes':
            case 'test':
            case 'jaringan':
            case 'lag': {
                m.reply('Pending Ya Kak?')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    akame.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    akame.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    akame.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    akame.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    akame.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    akame.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    akame.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'family100': {
                if ('family100' + m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100' + m.chat] = {
                    id: 'family100' + m.chat,
                    pesan: await akame.sendText(m.chat, hasil, fakestatus),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'apakah': {
                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                akame.sendMessage(m.chat, {
                    text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'bisakah': {
                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                akame.sendMessage(m.chat, {
                    text: `Pertanyaan : ${q}\nJawaban : ${ga}`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'bagaimanakah': {
                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                akame.sendMessage(m.chat, {
                    text: `Pertanyaan : ${q}\nJawaban : ${ya}`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'rate': {
                if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                akame.sendMessage(m.chat, {
                    text: `Rate : ${q}\nJawaban : *${te}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'gantengcek':
            case 'cekganteng': {
                if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} GuaAbuzz`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                akame.sendMessage(m.chat, {
                    text: `Nama : ${q}\nJawaban : *${teng}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'cantikcek':
            case 'cekcantik': {
                if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                akame.sendMessage(m.chat, {
                    text: `Nama : ${q}\nJawaban : *${tik}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                akame.sendMessage(m.chat, {
                    text: `Nama : ${q}\nJawaban : *${sange}%*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'kapankah': {
                if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                akame.sendMessage(m.chat, {
                    text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*`
                }, {
                    quoted: fakestatus
                })
                }
                break
            case 'wangy': {
                if (!q) return m.reply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                m.reply(awikwok)
                }
                break
            case 'cekmati': {
                if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
                break
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
                break
            case 'tebakmenu': {
                 let menuss = [
                {
                title: "Tebak-tebakan Menu",
                rows: [
                {title: "Tebak Lagu", rowId: `tebak lagu`, description: `Tebak judul lagu dari musik`},
                {title: "Tebak Gambar", rowId: `tebak gambar`, description: `Tebak kalimat dari setiap gambar`},
                {title: "Tebak Kata", rowId: `tebak kata`, description: `Tebak Kata dari soal yg diberikan`},
                {title: "Tebak Kalimat", rowId: `tebak kalimat`, description: `Tebak kalimat/bagian yg rumpang`},
                {title: "Tebak Lirik", rowId: `tebak lirik`, description: `Melengkapi bagian rumpang dari lirik yg diberikan`},
                {title: "Tebak Tebakan", rowId: `tebak tebakan`, description: `Tebak soal dengan cepat`},
				{title: "Cak Lontong", rowId: `tebak lontong`, description: `Teka-teki advanced yg hanya bisa dijawab out of the box`},
				{title: "Tebak Bendera", rowId: `tebak bendera`, description: `Tebak nama negara dari sebuah bendera`},
				{title: "Tebak Bendera V2", rowId: `tebak bendera2`, description: `Tebak nama negara dari sebuah bendera`},
				{title: "Tebak Kabupaten", rowId: `tebak kabupaten`, description: `Tebak nama kabupaten dari sebuah bendera`},
				{title: "Tebak kimia", rowId: `tebak kimia`, description: `Tebak nama lambang dari sebuah zat/unsur`},
				{title: "Asah Otak", rowId: `tebak asahotak`, description: `Tebak-tebakan seputar Ilmu pengetahuan umum`},
				{title: "Siapakah Aku", rowId: `tebak siapakahaku`, description: `Tebak nama benda/makhluk dari sebuah soal yg diberikan`},
				{title: "Susun Kata", rowId: `tebak susunkata`, description: `Susun kata dari sebuah soal yg diberikan`},
				{title: "Teka-teki", rowId: `tebak teki`, description: `Tebak-tebakan penghibur kita semua :D`},
                ]
                },
				]
				akame.sendListMsg(m.chat, `*Silahkan Pilih Menu Dibawah Ini*`, ntiktok, `TEBAK MENU`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, menuss, floc)
			}
            break
            case 'tebak': {
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await akame.sendMessage(m.chat, {
                        audio: {
                            url: result.link_song
                        },
                        mimetype: 'audio/mpeg'
                    }, {
                        quoted: fvn
                    })
                    akame.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                        tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak lagu',
                            buttonText: {
                                displayText: '⌲ Tebak Lagu'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, fakestatus).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak gambar',
                            buttonText: {
                                displayText: '⌲ Tebak Gambar'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, fakestatus).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak kata',
                            buttonText: {
                                displayText: '⌲ Tebak Kata'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, fakestatus).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak kalimat',
                            buttonText: {
                                displayText: '⌲ Tebak Kalimat'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, fakestatus).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak lirik',
                            buttonText: {
                                displayText: '⌲ Tebak Lirik'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, fakestatus).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak tebakan',
                            buttonText: {
                                displayText: '⌲ Tebak Tebakan'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, fakestatus).then(() => {
                        caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                        caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak lontong',
                            buttonText: {
                                displayText: '⌲ Tebak Lontong'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete caklontong[m.sender.split('@')[0]]
                        delete caklontong_desk[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendImage(m.chat, result.img, `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`, fakestatus).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak bendera',
                            buttonText: {
                                displayText: '⌲ Tebak Bendera'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendImage(m.chat, result.img, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, fakestatus).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak bendera',
                            buttonText: {
                                displayText: '⌲ Tebak Bendera'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, fakestatus).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak kabupaten',
                            buttonText: {
                                displayText: '⌲ Tebak Kabupaten'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    akame.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, fakestatus).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak kimia',
                            buttonText: {
                                displayText: '⌲ Tebak Kimia'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                akame.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, fakestatus).then(() => {
                    tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak asahotak',
                            buttonText: {
                                displayText: '⌲ Tebak Asah Otak'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                akame.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, fakestatus).then(() => {
                    tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak siapakahaku',
                            buttonText: {
                                displayText: '⌲ Tebak Siapakah Aku'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                akame.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, fakestatus).then(() => {
                    tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak susunkata',
                            buttonText: {
                                displayText: '⌲ Tebak Susun Kata'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                akame.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, fakestatus).then(() => {
                    tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        akame.sendButtonText(m.chat, [{
                            buttonId: 'tebak tekateki',
                            buttonText: {
                                displayText: '⌲ Tebak Teka Teki'
                            },
                            type: 1
                        }], `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ntiktok, fakestatus)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let {
                    genMath,
                    modes
                } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                akame.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, fakestatus).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                let buttons = [{
                    buttonId: 'jodohku',
                    buttonText: {
                        displayText: '⌲ Jodohku'
                    },
                    type: 1
                }]
                await akame.sendButtonText(m.chat, buttons, jawab, ntiktok, fakestatus, {
                    mentions: ments
                })
            }
            break
            case 'jadian': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let menst = [orang, jodoh]
                let buttons = [{
                    buttonId: 'jadian',
                    buttonText: {
                        displayText: '⌲ Jadiin'
                    },
                    type: 1
                }]
                await akame.sendButtonText(m.chat, buttons, jawab, ntiktok, fakestatus, {
                    mentions: menst
                })
            }
            break
            case 'tagmenu': {
			 let tagg = [
                {
                title: "Tag Menu",
                rows: [
				{title: "Si Paling Beban", rowId: `bebangrup`, description: `Siapa yg beban disini ya??`},
				{title: "Si Babi di Grup", rowId: `babigrup`, description: `Tes kebaperan yuk awokawok:v`},
				{title: "Si Paling Keren😎😎", rowId: `kerengrup`, description: `Anjayyy keren sekali orang ini😎😋`},
				{title: "Si Paling Pinter", rowId: `pintargrup`, description: `Belajarlah dari orang ini`},
				{title: "Si Paling Wibu", rowId: `wibugrup`, description: `Anjay wibu 😌😌`},
				{title: "Si Cantik bak Bidadari", rowId: `cantikgrup`, description: `Wow cantik sekali org ini😍`},
				{title: "Si Ganteng bak tuan Putra", rowId: `gantenggrup`, description: `Ganteng sekaliii tuan putra ini :D`},
				]
				},
				]
	   		    akame.sendListMsg(m.chat, `*Menu tag seseorang yg si paling...*`, ntiktok, `TAG MENU`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, tagg, floc)
				 }
				break
            case 'bebangrup': {
			if (!m.isGroup) throw mess.group
					let membear = participants.map(u => u.id)
					let oranag = membear[Math.floor(Math.random() * membear.length)]
					let teks = `Nih beban Grup @${oranag.split('@')[0]}`
					let meanst = [oranag]
            let buttaons = [
                        { buttonId: 'bebangrup', buttonText: { displayText: '⌲ Beban' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, buttaons, teks, ntiktok, fakestatus, {mentions: meanst})
                    }
            break
			case 'babigrup': {
			if (!m.isGroup) throw mess.group
					let memberr = participants.map(u => u.id)
					let orag = memberr[Math.floor(Math.random() * memberr.length)]
					let ters = `Nih babi di Grup @${orag.split('@')[0]}, jangan baper yak:v`
					let meansrt = [orag]
            let buttns = [
                        { buttonId: 'babigrup', buttonText: { displayText: '⌲ Babi' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, buttns, ters, ntiktok, fakestatus, {mentions: meansrt})
                    }
            break
			case 'kerengrup': {
			if (!m.isGroup) throw mess.group
					let krn = participants.map(u => u.id)
					let oranng = krn[Math.floor(Math.random() * krn.length)]
					let texx = `Wihh si keren kita nih 😎 @${oranng.split('@')[0]}`
					let mesrt = [oranng]
            let butons = [
                        { buttonId: 'kerengrup', buttonText: { displayText: '⌲ Keren' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, butons, texx, ntiktok, fakestatus, {mentions: mesrt})
                    }
            break
			case 'cantikgrup': {
			if (!m.isGroup) throw mess.group
					let cantik1 = participants.map(u => u.id)
					let mantap1 = cantik1[Math.floor(Math.random() * cantik1.length)]
					let vio1 = `Wihh si paling cute dan cantik ☺ @${mantap1.split('@')[0]}`
					let men1 = [mantap1]
            let butons1 = [
                        { buttonId: 'cantikgrup', buttonText: { displayText: '⌲ Cantik' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, butons1, vio1, ntiktok, fakestatus, {mentions: men1})
                    }
            break
			case 'gantenggrup': {
			if (!m.isGroup) throw mess.group
					let gtg1 = participants.map(u => u.id)
					let mantap2 = gtg1[Math.floor(Math.random() * gtg1.length)]
					let vio2 = `Anjayyy sungkem si paling ganteng😎😆 @${mantap2.split('@')[0]}`
					let men2 = [mantap2]
            let butons2 = [
                        { buttonId: 'gantenggrup', buttonText: { displayText: '⌲ Ganteng' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, butons2, vio2, ntiktok, fakestatus, {mentions: men2})
                    }
            break
			case 'pintargrup': {
			if (!m.isGroup) throw mess.group
					let pintaar = participants.map(u => u.id)
					let mantap3 = pintaar[Math.floor(Math.random() * pintaar.length)]
					let vio3 = `Ayo belajar biar pinter kek @${mantap3.split('@')[0]}`
					let men3 = [mantap3]
            let butons3 = [
                        { buttonId: 'pintargrup', buttonText: { displayText: '⌲ Pintar' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, butons3, vio3, ntiktok, fakestatus, {mentions: men3})
                    }
            break
			case 'wibugrup': {
			if (!m.isGroup) throw mess.group
					let wibu = participants.map(u => u.id)
					let mantap4 = wibu[Math.floor(Math.random() * wibu.length)]
					let vio4 = `Anjayy si pemuja anime @${mantap4.split('@')[0]}`
					let men4 = [mantap4]
            let butons4 = [
                        { buttonId: 'wibugrup', buttonText: { displayText: '⌲ WIBU' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, butons4, vio4, ntiktok, fakestatus, {mentions: men4})
                    }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                akame.sendMessage(m.chat, reactionMessage)
            }
            break
            case 'shutdown': {
             if (!isCreator) throw mess.owner
			 m.reply(`Otsukaresama deshita🖐`)
             await sleep(3000)
             process.exit()
             }
             break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await akame.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await akame.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Contoh : ${prefix + command} packname|author`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'culik': {
                if (args.length < 1) return m.reply('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of groupMembers) {
                    pantek.push(i.jid)
                }
                akame.groupParticipantsUpdate(args[0], pantek)
            }
            break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (!text) throw 'Text ?'
                await akame.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (!text) throw 'Text ?'
                await akame.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            //Masih Langka Bang:)
            case 'setpp':
            case 'setppbot': {
                var _0x1f62b4=_0x1881;function _0x1881(_0xecb92f,_0x59f3cc){var _0x4a1c92=_0x4a1c();return _0x1881=function(_0x1881ed,_0x5c48c4){_0x1881ed=_0x1881ed-0x1c3;var _0x38acc5=_0x4a1c92[_0x1881ed];return _0x38acc5;},_0x1881(_0xecb92f,_0x59f3cc);}function _0x4a1c(){var _0x559a25=['downloadAndSaveMediaMessage','6143643XJjgQH','1235178HRCQTs','Kirim/Reply\x20Image\x20Dengan\x20Caption\x20','image','set','874260SCWdwr','reply','21732WyLXvf','812LojjhI','588448WfSvPe','unlinkSync','8LlSagO','owner','test','ppbot.jpeg','11570tiNapk','picture','1268NdTncA','12935978kdXtYg','query','success','20cnDMwg'];_0x4a1c=function(){return _0x559a25;};return _0x4a1c();}(function(_0xa2bdbb,_0x5d926b){var _0xd5ff08=_0x1881,_0x590835=_0xa2bdbb();while(!![]){try{var _0x15a9a5=parseInt(_0xd5ff08(0x1c5))/0x1+-parseInt(_0xd5ff08(0x1c9))/0x2+parseInt(_0xd5ff08(0x1d8))/0x3+parseInt(_0xd5ff08(0x1d1))/0x4*(parseInt(_0xd5ff08(0x1cf))/0x5)+-parseInt(_0xd5ff08(0x1c7))/0x6*(-parseInt(_0xd5ff08(0x1c8))/0x7)+parseInt(_0xd5ff08(0x1cb))/0x8*(parseInt(_0xd5ff08(0x1d7))/0x9)+parseInt(_0xd5ff08(0x1d5))/0xa*(-parseInt(_0xd5ff08(0x1d2))/0xb);if(_0x15a9a5===_0x5d926b)break;else _0x590835['push'](_0x590835['shift']());}catch(_0x6ef9e5){_0x590835['push'](_0x590835['shift']());}}}(_0x4a1c,0x743b3));if(!isCreator)throw mess[_0x1f62b4(0x1cc)];if(!quoted)throw _0x1f62b4(0x1d9)+(prefix+command);if(!/image/['test'](mime))throw _0x1f62b4(0x1d9)+(prefix+command);if(/webp/[_0x1f62b4(0x1cd)](mime))throw _0x1f62b4(0x1d9)+(prefix+command);var media=await akame[_0x1f62b4(0x1d6)](quoted,_0x1f62b4(0x1ce));if(args[0x0]=='full'){var {img}=await generateProfilePicture(media);await akame[_0x1f62b4(0x1d3)]({'tag':'iq','attrs':{'to':botNumber,'type':_0x1f62b4(0x1c4),'xmlns':'w:profile:picture'},'content':[{'tag':_0x1f62b4(0x1d0),'attrs':{'type':_0x1f62b4(0x1c3)},'content':img}]}),fs[_0x1f62b4(0x1ca)](media),m[_0x1f62b4(0x1c6)](mess['success']);}else{var data=await akame['updateProfilePicture'](botNumber,{'url':media});fs['unlinkSync'](media),m[_0x1f62b4(0x1c6)](mess[_0x1f62b4(0x1d4)]);}
            }
            break
            //Masih Langka Bang:)
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
                var _0x5c8b71=_0x5233;(function(_0x2a8afc,_0xe1257b){var _0x1615dc=_0x5233,_0x47fd49=_0x2a8afc();while(!![]){try{var _0x4dbb94=-parseInt(_0x1615dc(0xe0))/0x1+parseInt(_0x1615dc(0xeb))/0x2+-parseInt(_0x1615dc(0xea))/0x3*(parseInt(_0x1615dc(0xe9))/0x4)+-parseInt(_0x1615dc(0xf1))/0x5+parseInt(_0x1615dc(0xed))/0x6+parseInt(_0x1615dc(0xf3))/0x7+parseInt(_0x1615dc(0xe5))/0x8;if(_0x4dbb94===_0xe1257b)break;else _0x47fd49['push'](_0x47fd49['shift']());}catch(_0xde229c){_0x47fd49['push'](_0x47fd49['shift']());}}}(_0x4d87,0xd68f8));if(!m[_0x5c8b71(0xec)])throw mess[_0x5c8b71(0xee)];if(!isAdmins)throw mess[_0x5c8b71(0xe1)];if(!quoted)throw'Kirim/Reply\x20Image\x20Dengan\x20Caption\x20'+(prefix+command);if(!/image/[_0x5c8b71(0xf2)](mime))throw _0x5c8b71(0xef)+(prefix+command);function _0x4d87(){var _0x52b700=['test','6711698NUujxC','success','w:profile:picture','1489612AANcBS','admin','image','full','ppgc.jpeg','24414096UQLFdY','picture','set','unlinkSync','56796YAluHJ','369btnrkB','414548HxCLnD','isGroup','3502626QvQSwS','group','Kirim/Reply\x20Image\x20Dengan\x20Caption\x20','chat','3433460slhGZl'];_0x4d87=function(){return _0x52b700;};return _0x4d87();}if(/webp/['test'](mime))throw _0x5c8b71(0xef)+(prefix+command);function _0x5233(_0x2dc643,_0x59ab96){var _0x4d877c=_0x4d87();return _0x5233=function(_0x523385,_0x53dece){_0x523385=_0x523385-0xdf;var _0x14f950=_0x4d877c[_0x523385];return _0x14f950;},_0x5233(_0x2dc643,_0x59ab96);}var media=await akame['downloadAndSaveMediaMessage'](quoted,_0x5c8b71(0xe4));if(args[0x0]==_0x5c8b71(0xe3)){var {img}=await generateProfilePicture(media);await akame['query']({'tag':'iq','attrs':{'to':m[_0x5c8b71(0xf0)],'type':_0x5c8b71(0xe7),'xmlns':_0x5c8b71(0xdf)},'content':[{'tag':_0x5c8b71(0xe6),'attrs':{'type':_0x5c8b71(0xe2)},'content':img}]}),fs[_0x5c8b71(0xe8)](media),m['reply'](mess[_0x5c8b71(0xf4)]);}else{var memeg=await akame['updateProfilePicture'](m[_0x5c8b71(0xf0)],{'url':media});fs[_0x5c8b71(0xe8)](media),m['reply'](mess['success']);}
            }
            break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                let teks = `*👥 Tag All By Admin*
 
 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                akame.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'hidetag': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                akame.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: ftroli
                })
            }
            break
            case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               akame.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilink = true
                    m.reply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilink = false
                    m.reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'antilink on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'antilink off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ntiktok, fgclink)
                }
            }
            break
            case 'antilinkyt': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkyt) return m.reply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkyt = true
                    m.reply(`Antilink YouTube Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkyt) return m.reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkyt = false
                    m.reply(`Antilink YouTube Nonaktif 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'antilinkyt on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'antilinkyt off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ntiktok, fgclink)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinktt) return m.reply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinktt = true
                    m.reply(`Antilink TikTok Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinktt) return m.reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinktt = false
                    m.reply(`Antilink TikTok Nonaktif 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'antilinktt on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'antilinktt off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ntiktok, fgclink)
                }
            }
            break
            case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].mute = true
                    m.reply(`${ntiktok} telah di mute di group ini 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].mute = false
                    m.reply(`${ntiktok} telah di unmute di group ini 🕊️`)
                } else {
                    let buttons = [{
                            buttonId: 'mute on',
                            buttonText: {
                                displayText: 'On'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'mute off',
                            buttonText: {
                                displayText: 'Off'
                            },
                            type: 1
                        }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ntiktok, fgclink)
                }
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === '1') {
                    await akame.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await akame.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await akame.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await akame.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EFFECTIVE GROUP",
                rows: [
                {title: "⌲ Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "⌲ Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "⌲ Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "⌲ Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                akame.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, ntiktok, `Hello Admin ${groupMetadata.subject}`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, floc)
                }
            }
            break
            case 'setnamabot': case 'setnamebot': {
            if (!isCreator) throw mess.owner
            if (!text) throw `Contoh : ${prefix + command} WhatsApp ✅`
            let name = await akame.updateProfileName(text)
            m.reply(`Berhasil mengganti nama bot menjadi ${name}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!isCreator) throw mess.owner
            if (!text) throw `this is a WhatsApp Bot named Akame >_<`
            let name = await akame.updateProfileStatus(text)
            m.reply(`Berhasil mengubah status bio bot menjadi ${name}`)
            }
            break
            case 'style':
            case 'styletext': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    styletext
                } = require('./lib/scraper')
                if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🖋️ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
            }
            break

            case 'vote': {
                if (!m.isGroup) throw mess.group
                if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
                if (!text) throw `Masukkan Alasan Melakukan Vote, Contoh: *${prefix + command} Owner Ganteng*`
                m.reply(`Vote dimulai!`)
                vote[m.chat] = [q, [],
                    []
                ]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}upvote* - Untuk Ya
*${prefix}devote* - Untuk Tidak
*${prefix}cekvote* - Untuk Mengecek Vote
*${prefix}hapusvote* - Untuk Menghapus Vote`
                let buttonsVote = [{
                        buttonId: `${prefix}upvote`,
                        buttonText: {
                            displayText: '⌲ Upvote'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${prefix}devote`,
                        buttonText: {
                            displayText: '⌲ Devote'
                        },
                        type: 1
                    }
                ]

                let buttonMessageVote = {
                    text: teks_vote,
                    footer: ntiktok,
                    buttons: buttonsVote,
                    headerType: 1
                }
                akame.sendMessage(m.chat, buttonMessageVote)
            }
            break
            case 'upvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}upvote* - Untuk Ya
*${prefix}devote* - Untuk Tidak
*${prefix}cekvote* - Untuk Mengecek Vote
*${prefix}hapusvote* - Untuk Menghapus Vote

©${akame.user.id}`
                let buttonsUpvote = [{
                        buttonId: `${prefix}upvote`,
                        buttonText: {
                            displayText: '⌲ Upvote'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${prefix}devote`,
                        buttonText: {
                            displayText: '⌲ Devote'
                        },
                        type: 1
                    }
                ]

                let buttonMessageUpvote = {
                    text: teks_vote,
                    footer: ntiktok,
                    buttons: buttonsUpvote,
                    headerType: 1,
                    mentions: menvote
                }
                akame.sendMessage(m.chat, buttonMessageUpvote)
            }
            break
            case 'devote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}upvote* - Untuk Ya
*${prefix}devote* - Untuk Tidak
*${prefix}cekvote* - Untuk Mengecek Vote
*${prefix}hapusvote* - Untuk Menghapus Vote

©${akame.user.id}`
                let buttonsDevote = [{
                        buttonId: `${prefix}upvote`,
                        buttonText: {
                            displayText: '⌲ Upvote'
                        },
                        type: 1
                    },
                    {
                        buttonId: `${prefix}devote`,
                        buttonText: {
                            displayText: '⌲ Devote'
                        },
                        type: 1
                    }
                ]

                let buttonMessageDevote = {
                    text: teks_vote,
                    footer: ntiktok,
                    buttons: buttonsDevote,
                    headerType: 1,
                    mentions: menvote
                }
                akame.sendMessage(m.chat, buttonMessageDevote)
            }
            break

            case 'cekvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}upvote* - Untuk Ya
*${prefix}devote* - Untuk Tidak
*${prefix}cekvote* - Untuk Mengecek Vote
*${prefix}hapusvote* - Untuk Menghapus Vote

©${akame.user.id}`
                akame.sendTextWithMentions(m.chat, teks_vote, fgclink)
                }
                break
            case 'deletevote':
            case 'delvote':
            case 'hapusvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                delete vote[m.chat]
                m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === 'close') {
                    await akame.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await akame.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [{
                            buttonId: 'group open',
                            buttonText: {
                                displayText: 'Open'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'group close',
                            buttonText: {
                                displayText: 'Close'
                            },
                            type: 1
                        }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, fgclink)

                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === 'open') {
                    await akame.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await akame.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [{
                            buttonId: 'editinfo open',
                            buttonText: {
                                displayText: 'Open'
                            },
                            type: 1
                        },
                        {
                            buttonId: 'editinfo close',
                            buttonText: {
                                displayText: 'Close'
                            },
                            type: 1
                        }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, fgclink)

                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                let response = await akame.groupInviteCode(m.chat)
                akame.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, fgclink,  {
                    detectLink: true
                })
            }
            break
            case 'revoke': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins && !isGroupOwner && !isCreator) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                await akame.groupRevokeInvite(m.chat)
                    .then(res => {
                        m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => m.reply(jsonformat(err)))
                    }
                break
            case 'hapus': case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                akame.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let getGroups = await akame.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
await akame.sendButtonText(i, buttons, txt, ntiktok, m, {quoted: fkontak})
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		              let txt = `「 Broadcast Bot 」\n\n${text}`
                      let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await akame.sendButtonText(yoi, buttons, txt, ntiktok, m, {quoted: fkontak})
                }
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `👤 @${i.userJid.split('@')[0]}\n`
                    teks += `⏳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n📈 *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                akame.sendTextWithMentions(m.chat, teks, fgclink)
            }
            break
            case 'q':
            case 'quoted': {
                if (!m.quoted) return m.reply('Reply Pesannya!!')
                let wokwol = await akame.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            case 'listpc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                akame.sendTextWithMentions(m.chat, tekslist, fgclink)
            }
            break
            case 'listgc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await akame.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                akame.sendTextWithMentions(m.chat, tekslistgc, fgclink)
            }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) m.reply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                akame.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, fgclink, {
                    mentions: online
                })
            }
            break
            case 'sticker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'sgif': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await akame.sendImageAsSticker(m.chat, media, fdoc, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await akame.sendVideoAsSticker(m.chat, media, fgif, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'stikerwm': case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await akame.downloadMediaMessage(qmsg)
                    let encmedia = await akame.sendImageAsSticker(m.chat, media, fdoc, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await akame.downloadMediaMessage(qmsg)
                    let encmedia = await akame.sendVideoAsSticker(m.chat, media, fgif, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'patrick': case 'patricksticker': case 'petrik': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await akame.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'dogesticker': case 'dogestick': case 'doge': case 'domge': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await akame.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker': case 'lovestick' : case 'slove': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await akame.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura': case 'gurastick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await akame.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'paimon': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await akame.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'sanime': case 'animestick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await akame.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'mukelu': case 'lu': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await akame.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
           case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
            await naze.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
            }
            break
            case 'ebinary': {
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                m.reply(eb)
            }
            break
            case 'dbinary': {
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                m.reply(db)
            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
                if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await akame.sendImageAsSticker(m.chat, res.url, fdoc, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'emojimix2': {
                if (!text) throw `Contoh : ${prefix + command} 😅`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await akame.sendImageAsSticker(m.chat, res.url, fdoc, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'attp': case 'ttp': {
            m.reply(mess.wait)
           if (!text) throw `Contoh : ${prefix + command} text`
           await akame.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'akame', 'kurume', fdoc, {asSticker: true})
         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
             akame.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
            case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await akame.downloadAndSaveMediaMessage(qmsg)
	        let { TelegraPh } = require('./lib/uploader')
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	        let FaTiH = await akame.sendImageAsSticker(m.chat, smeme, fdoc, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
            case 'simih':
            case 'simisimi': {
                if (!text) throw `Contoh : ${prefix + command} Mau Nanya Apa?`
                hm = await fetchJson(api('zenz', '/entertainment/simisimi' || '/entertainment/simisimi/v2', {
                    text: text
                }, 'apikey'))
                m.reply(hm.result.message)
            }
            break
            case 'gitstalk':
            case 'ghstalk':
            case 'githubstalk': {
            if (!text) throw `Kirim perintah ${prefix + command} *username*\n\nContoh : ${prefix + command} Abuzzpoet`
                let y = await fetchJson(`https://api.github.com/users/${text}`)
                let caption = `Stalk Github :\n\n`
                let i = y
                    caption += `⭔ Username : ${i.login}\n`
                    caption += `⭔ Id : ${i.id}\n`
                    caption += `⭔ Node Id : ${i.node_id}\n`
                    caption += `⭔ Type : ${i.type}\n`
                    caption += `⭔ Name : ${i.name}\n`
                    caption += `⭔ Company : ${i.company}\n`
                    caption += `⭔ Blog : ${i.blog}\n`
                    caption += `⭔ Location : ${i.location}\n`
                    caption += `⭔ Email : ${i.email}\n`
                    caption += `⭔ Bio : ${i.bio}\n`
                    caption += `⭔ Public Repo(s) : ${i.public_repos}\n`
                    caption += `⭔ Public Gist(s) : ${i.public_gists}\n`
                    caption += `⭔ Followers : ${i.followers}\n`
                    caption += `⭔ Following : ${i.following}\n`
                    caption += `⭔ Created At : ${moment(i.created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n`
                    caption += `⭔ Updated At : ${moment(i.updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n──────────────────────\n`
                    akame.sendImage(m.chat, i.avatar_url, "", fdoc, { caption })
                  }
            break
            case 'stalker':
            case 'stalk': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/stalker/nickff', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/stalker/nickml', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id,
                        query2: zone
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/stalker/nickaov', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/stalker/nickcod', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Contoh ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/stalker/nickpb', {
                        apikey: global.APIKeys[global.APIs['zenz']],
                        query: id
                    }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Contoh : ${prefix + command} ig cak_haho`
                    let {
                        result: anu
                    } = await fetchJson(api('zenz', '/stalker/stalker/ig', {
                        username: id
                    }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    akame.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, fgclink)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Contoh : ${prefix + command} npm scrape-primbon`
                    let {
                        result: anu
                    } = await fetchJson(api('zenz', '/stalker/stalker/npm', {
                        query: id
                    }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
                    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await akame.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    akame.sendMessage(m.chat, { image: buffer }, { quoted: fdoc })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await akame.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await akame.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: fvideo })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await akame.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            akame.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : fvn })
            }
            break
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await akame.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            akame.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ntiktok}.mp3`}, { quoted : fvn })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await akame.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            akame.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})
            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await akame.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await akame.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: fvideo })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await akame.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await akame.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    akame.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted: fdoc })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
            case 'yts':
            case 'ytsearch': {
                if (!text) throw `Contoh : ${prefix + command} story wa anime`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                akame.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fvideo })
            }
            break
            case 'google': {
                if (!text) throw `Contoh : ${prefix + command} fatih arridho`
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
            case 'gimage': {
                if (!text) throw `Contoh : ${prefix + command} Akame`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [{
                        buttonId: `gimage ${text}`,
                        buttonText: {
                            displayText: '⌲ Next Image'
                        },
                        type: 1
                    }]
                    let buttonMessage = {
                        image: {
                            url: images
                        },
                        caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`,
                        footer: ntiktok,
                        buttons: buttons,
                        headerType: 4
                    }
                    akame.sendMessage(m.chat, buttonMessage, {
                        quoted: fdoc
                    })
                })
            }
            break
            case 'play':
            case 'ytplay': {
                if (!text) throw `Contoh : ${prefix + command} Story Wa Anime`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2 // -2 limit
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [{
                        buttonId: `ytmp3 ${anu.url}`,
                        buttonText: {
                            displayText: '♫ Audio'
                        },
                        type: 1
                    },
                    {
                        buttonId: `ytmp4 ${anu.url}`,
                        buttonText: {
                            displayText: '⌲ Video'
                        },
                        type: 1
                    }
                ]
                let buttonMessage = {
                    image: {
                        url: anu.thumbnail
                    },
                    caption: `
📄 Title : ${anu.title}
🔎 Ext : Search
📀 ID : ${anu.videoId}
⏳ Duration : ${anu.timestamp}
👁️ Viewers : ${anu.views}
📤 Upload At : ${anu.ago}
👨‍🎤 Author : ${anu.author.name}
💻 Channel : ${anu.author.url}
💬 Description : ${anu.description}
🔗 Url : ${anu.url}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fvideo
                })
            }
            break
            case 'ytmp3':
            case 'ytaudio': {
                let {
                    yta
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2 // -2 limit
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : ' + media.dl_link)
                akame.sendImage(m.chat, media.thumb, `📄 Judul : ${media.title}\n🎚️ Ukuran File : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP3\n📮 Resolusi : ${args[1] || '128kbps'}`, fgclink)
                akame.sendMessage(m.chat, {
                    audio: {
                        url: media.dl_link
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${media.title}.mp3`
                }, {
                    quoted: fvn
                })
            }
            break
            case 'ytmp4':
            case 'ytvideo': {
                let {
                    ytv
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 2) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 2 // -2 limit
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : ' + media.dl_link)
                akame.sendMessage(m.chat, {
                    video: {
                        url: media.dl_link
                    },
                    mimetype: 'video/mp4',
                    fileName: `${media.title}.mp4`,
                    caption: `📄 Judul : ${media.title}\n🎚️ Ukuran File : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📥 Format : MP4\n📮 Resolusi : ${args[1] || '360p'}`
                }, {
                    quoted: fvideo
                })
            }
            break
            case 'getmusic': {
                let {
                    yta
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin Pesan Yang Anda Reply Tidak Mengandung Result Ytsearch`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                akame.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, fgclink)
                akame.sendMessage(m.chat, {
                    audio: {
                        url: media.dl_link
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${media.title}.mp3`
                }, {
                    quoted: fvn
                })
            }
            break
            case 'getvideo': {
                let {
                    ytv
                } = require('./lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin Pesan Yang Anda Reply Tidak Mengandung Result Ytsearch`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas ' + util.format(media))
                akame.sendMessage(m.chat, {
                    video: {
                        url: media.dl_link
                    },
                    mimetype: 'video/mp4',
                    fileName: `${media.title}.mp4`,
                    caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${media.dl_link}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}`
                }, {
                    quoted: fvideo
                })
            }
            break
            case 'pinterest': {
                if (!text) throw `Example : ${prefix + command}`
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `pinterest ${text}`, buttonText: {displayText: '⌲ NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `*Klik Next Untuk Melanjutkan*`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fgclink })
            }
            break
            //Anime/Wibu
            case 'couples':
            case 'animememe':
            case 'husbu':
            case 'neko':
            case 'shinobu':
            case 'megumin':
            case 'uniform':
            case 'maid':
            case 'oppai':
            case 'selfies':
            case 'cosplay':
            case 'hololive': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: { url: api('zenz', '/randomanime/' + command, {}, 'apikey') },
                    caption: `Random Image ${command}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            case 'kitagawa': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `kitagawa`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: { url: api('zenz', '/randomanime/marin-kitagawa', {}, 'apikey') },
                    caption: `Random Image Marin Kitagawa`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            case 'calliope': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `calliope`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: { url: api('zenz', '/randomanime/mori-calliope', {}, 'apikey') },
                    caption: `Random Image Mori Calliope`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            case 'raiden': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `raiden`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: { url: api('zenz', '/randomanime/raiden-shogun', {}, 'apikey') },
                    caption: `Random Image Raiden Shogun`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            case 'waifu': {
            	tesk = `*${ucapanWaktu} Kak ${pushname}*\n*Silahkan Pilih Dibawah Ini*\n\n_Dosa Tanggung Sendiri :v_`
            	let buttons = [{buttonId: `menu`, buttonText: {displayText: '📚MENU'}, type: 1},{buttonId: `sfw`, buttonText: {displayText: '✅SFW'}, type: 1}]
                await akame.sendButtonText(m.chat, buttons, tesk, ntiktok, m, {quoted: fkontak})
            	}
            break
            case 'sfw': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                let buttons = [{buttonId: `sfw`, buttonText: {displayText: '⌲ Next Image'}, type: 1},{buttonId: `command`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer,
                    fileLength: jumlah,
                    caption: `Random Waifu`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            //Tambahan Anime
            case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'loli':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'shota':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `${command}`, buttonText: {displayText: '⌲ Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `Random Anime ${command}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            //Random
            case 'aesthetic':
            case 'anjing':
            case 'blankpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'kucing':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {
            m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `${command}`, buttonText: {displayText: '⌲ Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `Random Image ${command}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            //Wallpaper
            case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `${command}`, buttonText: {displayText: '⌲ Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `Random Wallpaper ${command}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            //Meme
            case 'meme':
            case 'darkjoke':
            case 'memeindo':
            case 'onecak': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: { url: api('zenz', '/randomimage/' + command, {}, 'apikey') },
                    caption: `Random Image ${command}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            //Asupan
            case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                let buttons = [                   
                    {buttonId: `${command}`, buttonText: {displayText: '⌲ Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `Random Asupan ${command}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
                case 'couple': {
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let random = anu[Math.floor(Math.random() * anu.length)]
                akame.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Couple Male`
                }, {
                    quoted: fdoc
                })
                akame.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Couple Female`
                }, {
                    quoted: fdoc
                })
            }
            break
            case 'coffe':
            case 'kopi': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let buttons = [{
                    buttonId: `coffe`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: 'https://coffee.alexflipnote.dev/random'
                    },
                    caption: `☕ Random Coffe`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Mau Cari Wallpaper Apa?'
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    wallpaper
                } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                    buttonId: `wallpaper ${text}`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: result.image[0]
                    },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Mau Cari Wikimedia Apa?'
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    wikimedia
                } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                    buttonId: `wikimedia ${text}`,
                    buttonText: {
                        displayText: '⌲ Next Image'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    image: {
                        url: result.image
                    },
                    caption: `📄 Judul : ${result.title}\n📬 Sumber : ${result.source}\n🔗 Media Url : ${result.image}`,
                    footer: ntiktok,
                    buttons: buttons,
                    headerType: 4
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fdoc
                })
            }
            break
            case 'quotesanime':
            case 'quoteanime': {
                let {
                    quotesAnime
                } = require('./lib/scraper')
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                    buttonId: `quotesanime`,
                    buttonText: {
                        displayText: '⌲ Next Quotes'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Quotes By Akame',
                    buttons: buttons,
                    headerType: 2
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fakestatus
                })
            }
            break
            case 'animequotes':
            case 'animequote': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(api('zenz', '/randomtext/animequotes2', {}, 'apikey'))
                let buttons = [{
                    buttonId: `animequotes`,
                    buttonText: {
                        displayText: '⌲ Next Quotes'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: `~_${anu.result.quotes}_\n\nBy '${anu.result.character}', ${anu.result.anime}\n\n- ${anu.result.episode}`,
                    footer: 'Quotes By Akame',
                    buttons: buttons,
                    headerType: 2
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fgclink
                })
            }
            break
            case 'motivasi':
            case 'dilanquote':
            case 'bucinquote':
            case 'katasenja':
            case 'randomquote':
            case 'muslimquote':
            case 'galauquote':
            case 'kanyequote':
            case 'trumpquote':
            case 'trumpthink':
            case 'creepyfact':
            case 'faktaunik':
            case 'puisi':
            case 'pantun': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(api('zenz', '/randomtext/' + command, {}, 'apikey'))
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: '⌲ Next Quotes'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Quotes By Akame',
                    buttons: buttons,
                    headerType: 2
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fgclink
                })
            }
            break
            case 'cerpen': {
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(api('zenz', '/randomtext/' + command, {}, 'apikey'))
                let buttons = [{
                    buttonId: `${command}`,
                    buttonText: {
                        displayText: '⌲ Next Quotes'
                    },
                    type: 1
                }]
                let buttonMessage = {
                    text: `Judul : ${anu.result.Judul}\nPenulis : ${anu.result.Penulis}\n\n${anu.result.cerita}`,
                    footer: 'Quotes By Akame',
                    buttons: buttons,
                    headerType: 2
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fgclink
                })
            }
            break
            case '3dchristmas':
            case '3ddeepsea':
            case 'americanflag':
            case '3dscifi':
            case '3drainbow':
            case '3dwaterpipe':
            case 'halloweenskeleton':
            case 'sketch':
            case 'bluecircuit':
            case 'space':
            case 'metallic':
            case 'fiction':
            case 'greenhorror':
            case 'transformer':
            case 'berry':
            case 'thunder':
            case 'magma':
            case '3dcrackedstone':
            case '3dneonlight':
            case 'impressiveglitch':
            case 'naturalleaves':
            case 'fireworksparkle':
            case 'matrix':
            case 'dropwater':
            case 'harrypotter':
            case 'foggywindow':
            case 'neondevils':
            case 'christmasholiday':
            case '3dgradient':
            case 'blackpink':
            case 'gluetext': {
                if (!text) throw `Contoh : ${prefix + command} text`
                m.reply(mess.wait)
                akame.sendMessage(m.chat, {
                    image: {
                        url: api('zenz', '/textpro/' + command, {
                            text: text
                        }, 'apikey')
                    },
                    caption: `Text Pro ${command}`
                }, {
                    quoted: fkontak
                })
            }
            break
            case 'gay':
            case 'contrast':
            case 'pixelate':
            case 'dither':
            case 'sepia':
            case 'brighten':
            case 'greyscale':
            case 'circle':
            case 'blur':
            case 'invert':
            case 'scale':
            case 'upscale':
            case 'glass':
            case 'wasted':
            case 'passed':
            case 'comrade':
            case 'jail':
            case 'triggered': {
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
                m.reply(mess.wait)
                let dwnld = await akame.downloadAndSaveMediaMessage(qmsg)
                let { TelegraPh } = require('./lib/uploader')
                let fatGans = await TelegraPh(dwnld)
                let smeme = api('zenz', '/photoeditor/' + command, { url: fatGans }, 'apikey')
                let FaTiH = await akame.sendImageAsSticker(m.chat, smeme, fdoc, {
                    packname: global.packname,
                    author: global.author
                })
                await fs.unlinkSync(FaTiH)
            }
            break
            case 'logo2':
            case 'logo3':
            case 'logo4':
            case 'logogaming':
            case 'logogirl':
            case 'logogold':
            case 'spiderlogo':
            case 'ffcover':
            case 'crossfire':
            case 'galaxy':
            case 'glass':
            case 'neon':
            case 'beach':
            case 'awan':
            case 'flower':
            case 'bohlam':
            case 'kaligrafi':
            case 'coklat':
            case 'quotes':
            case 'grafity':
            case 'marmer':
            case 'musimsemi':
            case 'ruby':
            case 'shadowtext':
            case 'starlogo':
            case 'starnight':
            case 'starnight2':
            case 'blackpink':
            case 'cake':
            case 'flashlight':
            case 'puppycute':
            case 'yasuologo':
            case 'certificate':
            case 'igcertificate':
            case 'ytcertificate': {
                if (!text) throw 'Text?'
                m.reply(mess.wait)
                akame.sendMessage(m.chat, {
                    image: {
                        url: api('zenz', '/ephoto/' + command, {
                            text: text
                        }, 'apikey')
                    },
                    caption: `Ephoto ${command}`
                }, {
                    quoted: fdoc
                })
            }
            break
            case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Contoh : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, fakestatus)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Contoh : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, fakestatus)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'artinama': {
                if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, fakestatus)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, fakestatus)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, fakestatus)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Contoh : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, fakestatus)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Contoh : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, fakestatus)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'fengshui': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, fakestatus)
            }
            break
            case 'haribaik': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, fakestatus)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, fakestatus)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, fakestatus)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, fakestatus)
            }
            break
            case 'memancing': {
                if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'masasubur': {
                if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Contoh : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, fakestatus)
            }
            break
            case 'shio': {
                if (!text) throw `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                akame.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, fakestatus)
            }
            break
            case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess': {
				if (m.isGroup) throw mess.private
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				let buttons = [
                    { buttonId: `Owner`, buttonText: { displayText: '⌲ Chat Owner' }, type: 1 },
                    { buttonId: `menfesconfirm ${m.sender}`, buttonText: { displayText: '⌲ Terima Menfess' }, type: 1 },
                    { buttonId: `menfess`, buttonText: { displayText: '⌲ Kirim Menfess' }, type: 1 }
                ]
			akame.sendMessage(`${nomor}@s.whatsapp.net`, { text:`PESAN RAHASIA\n\nHai kak ada Menfess nih!!\n─────────────\n*Akame-Bot*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_`, title: 'PESAN RAHASIA DECTETED', footer: 'Ciee ada yang ngirim pesan nih\n© 2022 GuaAbuzz', buttons: buttons, headerType: 5 })
				m.reply(`Sukses Mengirim Menfess!!`)
				}
				break
			case 'menfesconfirm': {
 				 akame.sendMessage(q, { text: `Sudah Di Confirmasi Nih Menfess nyaa🤭` })
				  m.reply(`Terimakasih Menfess Telah Diterima`)
				  }
				break
            case 'tiktok': {
                if (!text) throw 'Link TikTok Ya Mana?'
                    let buttons = [{
                        buttonId: `tiktoknowm ${isUrl(text)[0]}`,
                        buttonText: {
                            displayText: '⌲ No Watermark'
                        },
                        type: 1
                    },
                    {
                        buttonId: `tiktokwm ${isUrl(text)[0]}`,
                        buttonText: {
                            displayText: '⌲ With Watermark'
                        },
                        type: 1
                    },
                    {
                        buttonId: `tiktokmp3 ${isUrl(text)[0]}`,
                        buttonText: {
                            displayText: '♫ Audio'
                        },
                        type: 1
                    }
                ]
                let buttonMessage = {
                    text: `TikTok Downloader`,
                    footer: 'Tekan Tombol Di Bawah',
                    buttons: buttons,
                    headerType: 5
                }
                    akame.sendMessage(m.chat, buttonMessage, { quoted: fgclink })
            }
            break
            case 'tiktoknowm':
            case 'tiktoknowatermark': {
                if (!text) throw 'Link TikTok Ya Mana?'
                m.reply(mess.wait)
                let anu = await fdl.downloader.tiktok(text)
                let buttonMessage = {
                    video: {
                        url: anu.nowm
                    },
                    caption: `👤 *Author:* ${anu.author}\n📌 *Title:* ${anu.title}\n🔗 Download From ${text}`,
                    footer: ntiktok,
                    headerType: 5
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fvideo
                })
            }
            break
            case 'tiktokwm':
            case 'tiktokwatermark': {
                if (!text) throw 'Link TikTok Ya, Mana?'
                m.reply(mess.wait)
                let anu = await fdl.downloader.tiktok(text)
                let buttonMessage = {
                    video: {
                        url: anu.watermark
                    },
                    caption: `👤 *Author:* ${anu.author}\n📌 *Title:* ${anu.title}\n🔗 Download From ${text}`,
                    footer: ntiktok,
                    headerType: 5
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fvideo
                })
            }
            break
            case 'tiktokmp3':
            case 'tiktokaudio': {
                if (!text) throw 'Link TikTok Ya Mana?'
                m.reply(mess.wait)
                let anu = await fdl.downloader.tiktok(text)
				let cap = `👤 *Author:* ${anu.author}\n📌 *Title:* ${anu.title}\n🔗 Download From ${text}`
				akame.sendMessage(m.chat, { caption: cap, image: { url: anu.thumbnail }})
				akame.sendMessage(m.chat, { audio: { url: anu.audio }, mimetype: 'audio/mpeg'}, { quoted: fvn })
				}
				break
            case 'ig': case 'igdl': case 'instagram': {
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                m.reply(mess.wait)
                let urlnya = text
	            bochil.instagramdlv3(urlnya)
	            .then(async(result) => {
		        for(let i of result){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                akame.sendMessage(m.chat, { video: link, }, { quoted: fvideo })
                } else {
                    let link = await getBuffer(i.url)
                  akame.sendMessage(m.chat, { image: link, }, { quoted: fgclink })                  
                }
            }
            }).catch((err) => m.reply(`Server eror`))
            }		
			break
            case 'instastory': case 'igs': case 'igstory': case 'instagramstory': {
                if (!text) throw 'Masukkan Username!'                
                m.reply(mess.wait)                
	            hx.igstory(text)
	            .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                akame.sendMessage(m.chat, { video: link, }, { quoted: fvideo })
                } else {
                    let link = await getBuffer(i.url)
                  akame.sendMessage(m.chat, { image: link, }, { quoted: fgclink})                  
                }
            }
            }).catch((err) => m.reply(`Sorry the username was not found`))
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await akame.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, fgclink)
                akame.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: fvn })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await akame.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                akame.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: fvn })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '⌲ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fgclink })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '⌲ Video'}, type: 1}
                ]
                let buttonMessage = {
		            image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await akame.sendMessage(m.chat, buttonMessage, { quoted: fgclink })
                akame.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: fvn })
            }
            break
            case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                m.reply(mess.wait)
                try {
                var data= await bochil.savefrom(`${text}`)
                for(let i of data.url){    
                akame.sendMessage(m.chat, { video: { url: i.url }, caption: `Done`}, { quoted: fvideo })
                }
                } catch {
                try {
                var daa = await bochil.facebookdl(`${text}`)
                for(let i of daa.result){    
                akame.sendMessage(m.chat, { video: { url: i.url }, caption: `Done`}, { quoted: fvideo })
                }
                } catch {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                }
              }
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Contoh : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '⌲ Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: ntiktok,
			buttons,
			headerType: 4
		    }
		    akame.sendMessage(m.chat, buttonMessage, { quoted: fgclink })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        akame.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: fgclink })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Contoh : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		akame.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: fvn })
	    }
	    break
            case 'iqra': {
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) throw oh
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                akame.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: fdoc
                }).catch((err) => m.reply(oh))
            }
            break
            case 'juzamma': {
                if (args[0] === 'pdf') {
                    m.reply(mess.wait)
                    akame.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: fdoc
                    })
                } else if (args[0] === 'docx') {
                    m.reply(mess.wait)
                    akame.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: fdoc
                    })
                } else if (args[0] === 'pptx') {
                    m.reply(mess.wait)
                    akame.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: fdoc
                    })
                } else if (args[0] === 'xlsx') {
                    m.reply(mess.wait)
                    akame.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: fdoc
                    })
                } else {
                    m.reply(`Mau format apa ? Contoh : ${prefix + command} pdf\nFormat yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
            break
            case 'hadis':
            case 'hadist': {
                if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
                if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    m.reply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    m.reply(`Hadis tidak ditemukan !`)
                }
            }
            break
            case 'alquran':
            case 'al-quran': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
                akame.sendMessage(m.chat, {
                    audio: {
                        url: res.result.data.audio.primary
                    },
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: fvn
                })
            }
            break
            case 'tafsirsurah': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
            }
            break
            case 'asmaulhusna': {
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json')
                let capt = `Asmaul Husna:\n\n`
                for (let i of anu) {
                    capt += `⭔ Nomor: ${i.index}\n`
                    capt += `⭔ Latin: ${i.latin}\n`
                    capt += `⭔ Arab: ${i.arabic}\n`
                    capt += `⭔ Arti ID: ${i.translation_id}\n`
                    capt += `⭔ Arti EN: ${i.translation_en}\n\n──────────────────────\n`
                }
                m.reply(capt)
            }
            break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await akame.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                akame.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : fvn })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Tidak Ditemukan ❎'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: +new Date,
                    locked: false,
                }
                m.reply(mess.done)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak Ada Hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'
                delete global.db.data.sticker[hash]
                m.reply(mess.done)
            }
            break
            case 'listcmd': {
                let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                akame.sendText(m.chat, teks, fdoc, {
                    mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
                })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash Not Found In Database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Contoh : ${prefix + command} Nama File`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' Telah Terdaftar Di List Pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                m.reply(`Berhasil Menambahkan Pesan Di List Pesan Sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Contoh : ${prefix + command} File Name\n\nLihat List Pesan Dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' Tidak Terdaftar Di List Pesan`
                akame.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
                    return {
                        nama,
                        ...isi
                    }
                })
                let teks = 'LIST DATABASE 📂\n\n'
                for (let i of seplit) {
                    teks += `📛 *Name :* ${i.nama}`
                    teks += `🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                m.reply(teks)
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
            break
            case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                akame.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await akame.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, ntiktok, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await akame.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, ntiktok, m)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await akame.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ntiktok, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await akame.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ntiktok, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ntiktok, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await akame.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await akame.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ntiktok, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await akame.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ntiktok, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await akame.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ntiktok, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                akame.public = true
                m.reply('Sukses Ubah Ke Penggunaan Umum')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                akame.public = false
                m.reply('Sukses Ubah Ke Penggunaan Sendiri')
            }
            break
            case 'apikey': {
                m.reply(`Apikey Yang Dipake Oleh Bot Akame\n⬣ https://zenzapis.xyz [Sewa]`)
                }
                break
            case 'nulis': {
                if (!q) return m.reply(`Teks Nya Apa Kak?`)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let sections = [
                {
                title: "Nulis Buku >_<",
                rows: [
                {title: "⌲ 「 Nulis Kanan 」", rowId: `${prefix}nuliskanan ${q}`},
                {title: "⌲ 「 Nulis Kiri 」", rowId: `${prefix}nuliskiri ${q}`}
                ]
                },
                {
                title: "Nulis Folio >_<",
                rows: [
                {title: "⌲ 「 Folio Kanan 」", rowId: `${prefix}foliokanan ${q}`},
                {title: "⌲ 「 Folio Kiri 」", rowId: `${prefix}foliokiri ${q}`}
                ]
                }
                ]
                akame.sendListMsg(m.chat, `*Silahkan Pilih Menu Dibawah Ini*`, ntiktok, `NULIS MENU`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, floc)
              }
            break
            case 'nuliskiri': {
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                m.reply(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./media/image/nulis/images/buku/sebelumkiri.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./media/image/nulis/images/buku/setelahkiri.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                akame.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/buku/setelahkiri.jpg')}, { quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
             }
            break
            case 'nuliskanan': {
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./media/image/nulis/images/buku/sebelumkanan.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./media/image/nulis/images/buku/setelahkanan.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                akame.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/buku/setelahkanan.jpg')}, {quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
              }
            break
            case 'foliokiri': {
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokiri* teks`)
                m.reply(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./media/image/nulis/images/folio/sebelumkiri.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./media/image/nulis/images/folio/setelahkiri.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                akame.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/folio/setelahkiri.jpg')}, { quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
             }
            break
            case 'foliokanan': {
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokanan* teks`)
                m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./media/image/nulis/images/folio/sebelumkanan.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./media/image/nulis/images/folio/setelahkanan.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                akame.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/folio/setelahkanan.jpg')}, {quoted: fakestatus, caption: `Jangan Malas Kak...`})
                })
             }
            break
            case 'ping':
            case 'botstatus':
            case 'statusbot':
            case 'infobot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                let txtping = `*⍢⃝🤖 I N F O  B O T*\n\n`
                txtping += `*👤 Owner Name :* ${global.namaowner}\n`
                txtping += `*🕊️ Nama Bot :* ${global.namabot}\n`
                txtping += `*🔗 Nomor Owner :* wa.me/${global.owner}\n\n`
                txtping += `*⍢⃝👾 I N F O  S T A T I S T I K*\n\n`
                txtping += `*🗃️ Lib :* Baileys Multi Device\n`
                txtping += `*🆎 Tipe :* Nodejs\n`
                txtping += `*📈 STATUS BOT :* ONLINE\n`
                txtping += `*⚡ Speed :* ${latensi.toFixed(4)} Second\n`
                txtping += `*⏰ Runtime :* ${runtime(process.uptime())}\n`
                txtping += `*💻 RAM Server :* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}\n\n`
                txtping += `*⍢⃝🤝 C O N N E C T  W I T H  M E*\n\n`
                txtping += `*🎗️ Github :* ${global.github}\n`
                txtping += `*🎗️ WhatsApp :* wa.me/${global.owner}\n`
                    .trim()
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, txtping, ntiktok, fkontak)
            }
            break
            case 'speed':
            case 'speedtest': {
                m.reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }
            }
            break
            //Jangan Dihapus Tar Eror Banh
            case 'owner': case 'creator': {
                const _0x53d5a1=_0x27a5;function _0x1462(){const _0xbe3016=['12uYHjID','208fygsPF','END:VCARD','2931pmexYt','chat','item2.EMAIL;type=INTERNET:rajifarmansyah46@gmail.com\x0a','owner','item1.TEL;type=CELL;type=VOICE;waid=6289636827082:+62\x20896-3682-7082\x0a','BEGIN:VCARD\x0a','5414050UngFlr','ORG:GuaAbuzz;\x0a','106vqkniK','item3.X-ABLabel:TikTok\x0a','N:;GuaAbuzz\x20Creator;;;','item1.X-ABLabel:Creator\x20Akame\x20-\x20MD\x0a','11977850TbeEvp','4721KSYLYP','2327066mcQmla','3292794BrTbVz','GuaAbuzz','item4.X-ABLabel:Region\x0a','sendContact','5082320iACHTF'];_0x1462=function(){return _0xbe3016;};return _0x1462();}function _0x27a5(_0x35959a,_0x59c18c){const _0x146279=_0x1462();return _0x27a5=function(_0x27a522,_0x5d48a4){_0x27a522=_0x27a522-0x1d1;let _0x1a2418=_0x146279[_0x27a522];return _0x1a2418;},_0x27a5(_0x35959a,_0x59c18c);}(function(_0x4e6b4a,_0xc2511f){const _0x82151d=_0x27a5,_0x596f5d=_0x4e6b4a();while(!![]){try{const _0x4cc183=parseInt(_0x82151d(0x1d3))/0x1*(-parseInt(_0x82151d(0x1e5))/0x2)+-parseInt(_0x82151d(0x1dd))/0x3*(-parseInt(_0x82151d(0x1db))/0x4)+parseInt(_0x82151d(0x1e3))/0x5+-parseInt(_0x82151d(0x1da))/0x6*(-parseInt(_0x82151d(0x1d4))/0x7)+parseInt(_0x82151d(0x1d9))/0x8+-parseInt(_0x82151d(0x1d5))/0x9+-parseInt(_0x82151d(0x1d2))/0xa;if(_0x4cc183===_0xc2511f)break;else _0x596f5d['push'](_0x596f5d['shift']());}catch(_0x32be5a){_0x596f5d['push'](_0x596f5d['shift']());}}}(_0x1462,0x9758c));let vcard=_0x53d5a1(0x1e2)+'VERSION:3.0\x0a'+_0x53d5a1(0x1e7)+'FN:GuaAbuzz\x20Creator\x0a'+_0x53d5a1(0x1e4)+_0x53d5a1(0x1e1)+_0x53d5a1(0x1d1)+_0x53d5a1(0x1df)+'item2.X-ABLabel:Email\x0a'+'item3.URL:https://tiktok.com/@guaabuzz\x0a'+_0x53d5a1(0x1e6)+'item4.ADR:;;Jepang;;;;\x0a'+_0x53d5a1(0x1d7)+_0x53d5a1(0x1dc);akame['sendMessage'](m[_0x53d5a1(0x1de)],{'contacts':{'displayName':_0x53d5a1(0x1d6),'contacts':[{'vcard':vcard}]}},{'quoted':fkontak}),akame[_0x53d5a1(0x1d8)](m[_0x53d5a1(0x1de)],global[_0x53d5a1(0x1e0)],fkontak);
            }
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await akame.sendButtonText(ownernya, buttons, pjtxt, ntiktok, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await akame.sendButtonText(m.chat, buttons, akhji, ntiktok, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS LAPORANNYA' }, type: 1 }]
            await akame.sendButtonText(ownernya, buttons, pjtxt, ntiktok, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat_`
            await akame.sendButtonText(m.chat, buttons, akhji, ntiktok, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: m.key
                    }
                }
                akame.sendMessage(m.chat, reactionMessage)
            }
            break
            case 'tagme': {
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            akame.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await akame.sendButtonText(m.chat, buttons, jawab, ntiktok, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'ceklimit': case 'checklimit': case 'limit':{
					m.reply('*Limit Lu :* ' + (db.data.users[m.sender].limit))
					}
					break 
		    case 'totalhit': case 'hit': {
			m.reply(`*Total Hit : ${jumlahcmd}*\n*Total Hit Harian : ${jumlahharian}*`)
			}
			break
            case 'runtime': case 'tes': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑SEWA' }, type: 1 }]
                await akame.sendButtonText(m.chat, buttons, lowq, ntiktok, fkontak)
            }
            break
            case 'gsmarena': {
                if (!text) throw `Contoh : ${prefix + command} samsung`
                let res = await fetchJson(api('zenz', '/webzone/gsmarena', {
                    query: text
                }, 'apikey'))
                let {
                    judul,
                    rilis,
                    thumb,
                    ukuran,
                    type,
                    storage,
                    display,
                    inchi,
                    pixel,
                    videoPixel,
                    ram,
                    chipset,
                    batrai,
                    merek_batre,
                    detail
                } = res.result
                let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
                akame.sendImage(m.chat, thumb, capt, fdoc)
            }
            break
            case 'jadwalbioskop': {
                if (!text) throw `Contoh: ${prefix + command} jakarta`
                let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', {
                    kota: text
                }, 'apikey'))
                let capt = `Jadwal Bioskop From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Thumbnail: ${i.thumb}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                }
                akame.sendImage(m.chat, res.result[0].thumb, capt, fdoc)
            }
            break
            case 'nowplayingbioskop': {
                let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
                let capt = `Now Playing Bioskop\n\n`
                for (let i of res.result) {
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
                }
                akame.sendImage(m.chat, res.result[0].img, capt, fdoc)
            }
            break
            case 'aminio': {
                if (!text) throw `Contoh: ${prefix + command} free fire`
                let res = await fetchJson(api('zenz', '/webzone/amino', {
                    query: text
                }, 'apikey'))
                let capt = `Amino Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Community: ${i.community}\n`
                    capt += `⭔ Community Link: ${i.community_link}\n`
                    capt += `⭔ Thumbnail: ${i.community_thumb}\n`
                    capt += `⭔ Description: ${i.community_desc}\n`
                    capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
                }
                akame.sendImage(m.chat, 'https://' + res.result[0].community_thumb, capt, fgclink)
            }
            break
            case 'wattpad': {
                if (!text) throw `Contoh : ${prefix + command} love`
                let res = await fetchJson(api('zenz', '/webzone/wattpad', {
                    query: text
                }, 'apikey'))
                let {
                    judul,
                    dibaca,
                    divote,
                    bab,
                    waktu,
                    url,
                    thumb,
                    description
                } = res.result[0]
                let capt = `Wattpad From query\n\n`
                capt += `⭔ Judul: ${judul}\n`
                capt += `⭔ Dibaca: ${dibaca}\n`
                capt += `⭔ Divote: ${divote}\n`
                capt += `⭔ Bab: ${bab}\n`
                capt += `⭔ Url: ${url}\n`
                capt += `⭔ Deskripsi: ${description}`
                akame.sendImage(m.chat, thumb, capt, fgclink)
            }
            break
            case 'webtoons': {
                if (!text) throw `Contoh : ${prefix + command} love`
                let res = await fetchJson(api('zenz', '/webzone/webtoons', {
                    query: text
                }, 'apikey'))
                let capt = `Webtoons Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Like: ${i.like}\n`
                    capt += `⭔ Creator: ${i.creator}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                }
                m.reply(capt)
            }
            break
            case 'drakor': {
                if (!text) throw `Contoh : ${prefix + command} love`
                let res = await fetchJson(api('zenz', '/webzone/drakor', {
                    query: text
                }, 'apikey'))
                let capt = `Drakor Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Years: ${i.years}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
                }
                akame.sendImage(m.chat, res.result[0].thumbnail, capt, fgclink)
            }
            break
            case 'tvschedule': case 'jadwaltv': case 'tv': {
            if (!q) return m.reply('Pilih Channelnya Bro\n1.rcti\n2.nettv\n3.antv\n4.gtv\n5.indosiar\n6.inewstv\n7.kompastv\n8.metrotv\n9.mnctv\n10.rtv\n11.sctv\n12.trans7\n13.transtv\n14.tvone\n15.tvri')
            let { jadwaltv }= require('./lib/jadwaltv')
            m.reply(await jadwaltv(q))
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'jadwalsholat':
            case 'jadwalshalat':
            case 'jadwalsalat': {
                if (!text) throw `Contoh : ${prefix + command} Padang`
                let res = await alya.jadwalsholat(text)  
                let capt = `Jadwal Sholat Kota : ${text}\n\n`
                let i = res
                    capt += `⭔ Tanggal : ${i.tanggal}\n`
                    capt += `⭔ Imsak : ${i.imsyak}\n`
                    capt += `⭔ Subuh : ${i.subuh}\n`
                    capt += `⭔ Dzuhur : ${i.dzuhur}\n`
                    capt += `⭔ Ashar : ${i.ashar}\n`
                    capt += `⭔ Maghrib : ${i.maghrib}\n`
                    capt += `⭔ Isya : ${i.isya}\n\n──────────────────────\n`
                m.reply(capt)
            }
            break
            case 'cekapi':
            case 'cekapikey': {
                if (!text) throw `Contoh : ${prefix + command} Budi12`
                let anu = await fetchJson(api('zenz', '/user/cekapi', { apikey: text }))
                let caption = `Apikey Check :\n\n`
                let i = anu.message
                    caption += `⭔ Id : ${i.id}\n`
                    caption += `⭔ Created : ${i.created}\n`
                    caption += `⭔ Updated : ${i.updated}\n`
                    caption += `⭔ First Name : ${i.firstname}\n`
                    caption += `⭔ Last Name : ${i.lastname}\n`
                    caption += `⭔ Email : ${i.email}\n`
                    caption += `⭔ Username : ${i.username}\n`
                    caption += `⭔ ApiKey : ${i.apiKey}\n`
                    caption += `⭔ Todayhit : ${i.today_hit}\n`
                    caption += `⭔ Totalhit : ${i.total_hit}\n`
                    caption += `⭔ Status : ${i.status}\n`
                    caption += `⭔ Premium : ${i.premium}\n`
                    caption += `⭔ Expired : ${i.premium_expired}\n`
                    caption += `⭔ Active : ${i.active}\n`
                    caption += `⭔ Location : ${i.location}\n`
                    caption += `⭔ Biodata : ${i.biodata}\n\n──────────────────────\n`
                    akame.sendImage(m.chat, i.profile_image, "", fdoc, { caption })
            }
            break
            case 'mediafire': {
                if (!text) throw `Example : ${prefix + command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`               
                m.reply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let me = await alya.mediafire(text)  
                m.reply(util.format(me))              
                akame.sendMessage(m.chat, { document: { url: me[0].link }, mimetype: `${me[0].mime}`, fileName: `${me[0].nama}` }, { quoted: fdoc })
            }
            break
            case 'zippyshare': {
                if (!text) throw `Link ZippyShare Ya Mana?`
                let anu = await fetchJson(api('zenz', '/downloader/zippyshare', { url: isUrl(text)[0] }, 'apikey'))
                akame.sendFileUrl(m.chat, anu.result.link, "", fdoc)
            }
            break
            case 'gempa': {
                let anu = await fetchJson(api('zenz', '/information/bmkg/gempa', {}, 'apikey'))
                let caption = `Gempa Information :\n\n`
                let i = anu.result
                caption += `⭔ Tanggal : ${i.tanggal}\n`
                caption += `⭔ Jam : ${i.jam}\n`
                caption += `⭔ Datetime : ${i.datetime}\n`
                caption += `⭔ Coordinates : ${i.coordinates}\n`
                caption += `⭔ Lintang : ${i.lintang}\n`
                caption += `⭔ Bujur : ${i.bujur}\n`
                caption += `⭔ Magnitude : ${i.magnitude}\n`
                caption += `⭔ Kedalaman : ${i.kedalaman}\n`
                caption += `⭔ Wilayah : ${i.wilayah}\n`
                caption += `⭔ Potensi : ${i.potensi}\n`
                caption += `⭔ Dirasakan : ${i.dirasakan}\n`
                caption += `⭔ Shakemap : ${i.shakemap}\n`
                akame.sendFileUrl(m.chat, i.shakemap, "", fdoc, { caption })
            }
            break
            case 'iplookup': {
                if (!text) throw `Ip Ya Mana?`
                let anu = await fetchJson(api('zenz', '/information/iplookup', { query: text }, 'apikey'))
                let caption = `IP Information :\n\n`
                let i = anu.result
                caption += `⭔ Country : ${i.country}\n`
                caption += `⭔ Region : ${i.region}\n`
                caption += `⭔ City : ${i.city}\n`
                caption += `⭔ Zip : ${i.zip}\n`
                caption += `⭔ Latitude : ${i.latitude}\n`
                caption += `⭔ Longtitude : ${i.longtitude}\n`
                caption += `⭔ Isp : ${i.isp}\n`
                caption += `⭔ Domain : ${i.domain}\n`
                caption += `⭔ Usagetype : ${i.usage_type}\n`
                caption += `⭔ Time_zone : ${i.time_zone}\n`
                caption += `⭔ Local_time : ${i.local_time}\n`
                caption += `⭔ Addres_type : ${i.addres_type}\n`
                caption += `⭔ Category : ${i.category}\n`
                caption += `⭔ Proxy : ${i.proxy}\n`
                caption += `⭔ Provider : ${i.provider}\n`
                caption += `⭔ Weather : ${i.weather}\n`
                akame.sendText(m.chat, caption, fgclink)
            }
            break
            case 'kisahmuslim': {
                let anu = await fetchJson(api('zenz', '/islami/kisahmuslim', {}, 'apikey'))
                let teks = `⭔ Judul : ${anu.result.Judul}\n⭔ Kisah :\n${anu.result.Cerita}`
                akame.sendFileUrl(m.chat, anu.result.Thumb, "", fdoc, { caption: teks })
            }
            break
            case 'kisahnabi': {
                if (text) {
                    title = text.toLowerCase()
                    let fetch = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Islami/${title}.json`)
                    let teks = `⭔ Nama : ${fetch.name}\n⭔ Lahir : ${fetch.thn_kelahiran}\n⭔ Umur : ${fetch.usia}\n⭔ Lokasi : ${fetch.tmp}\n⭔ Kisah :\n${fetch.description}`
                    akame.sendFileUrl(m.chat, 'https://i.pinimg.com/originals/a6/81/c5/a681c55ca1bee611c39d3b4a58712dc3.jpg', "", floc, { caption: teks })
                } else if (!text) {
                    const sections = [{
                        title: "Kisah Nabi",
                        rows: [
                            {title: "Kisah Nabi Adam", rowId: ".kisahnabi adam"},
                            {title: "Kisah Nabi Idris", rowId: ".kisahnabi idris"},
                            {title: "Kisah Nabi Nuh", rowId: ".kisahnabi nuh"},
                            {title: "Kisah Nabi Hud", rowId: ".kisahnabi hud"},
                            {title: "Kisah Nabi Sholeh", rowId: ".kisahnabi sholeh"},
                            {title: "Kisah Nabi Ibrahim", rowId: ".kisahnabi ibrahim"},
                            {title: "Kisah Nabi Luth", rowId: ".kisahnabi luth"},
                            {title: "Kisah Nabi Ismail", rowId: ".kisahnabi ismail"},
                            {title: "Kisah Nabi Ishaq", rowId: ".kisahnabi ishaq"},
                            {title: "Kisah Nabi Yaqub", rowId: ".kisahnabi yaqub"},
                            {title: "Kisah Nabi Yusuf", rowId: ".kisahnabi yusuf"},
                            {title: "Kisah Nabi Ayyub", rowId: ".kisahnabi ayyub"},
                            {title: "Kisah Nabi Syuaib", rowId: ".kisahnabi syuaib"},
                            {title: "Kisah Nabi Musa", rowId: ".kisahnabi musa"},
                            {title: "Kisah Nabi Harun", rowId: ".kisahnabi harun"},
                            {title: "Kisah Nabi Dzulkifli", rowId: ".kisahnabi dzulkifli"},
                            {title: "Kisah Nabi Daud", rowId: ".kisahnabi daud"},
                            {title: "Kisah Nabi Sulaiman", rowId: ".kisahnabi sulaiman"},
                            {title: "Kisah Nabi Ilyas", rowId: ".kisahnabi ilyas"},
                            {title: "Kisah Nabi Ilyasa", rowId: ".kisahnabi ilyasa"},
                            {title: "Kisah Nabi Yunus", rowId: ".kisahnabi yunus"},
                            {title: "Kisah Nabi Zakariya", rowId: ".kisahnabi zakariya"},
                            {title: "Kisah Nabi Yahya", rowId: ".kisahnabi yahya"},
                            {title: "Kisah Nabi Isa", rowId: ".kisahnabi isa"},
                            {title: "Kisah Nabi Muhammad", rowId: ".kisahnabi muhammad"}
                        ]
                    }]
                    const listMessage = {
                        text: 'List 25 Nabi',
                        footer: ntiktok,
                        buttonText: 'OPEN LIST',
                        sections
                    }
                    const sendMsg = await akame.sendMessage(m.chat, listMessage, { quoted: m })
                }
            }
            break
            case 'niatsalat':
            case 'niatsholat': {
                if (text) {
                    title = text.toLowerCase()
                    let fetch = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Niatsolat/${title}.json`)
                    let teks = `⭔ Nama : ${fetch.name}\n⭔ Arab : ${fetch.arabic}\n⭔ Latin : ${fetch.latin}\n⭔ Terjemahan : ${fetch.terjemahan}`
                    akame.sendFileUrl(m.chat, 'https://aswajamuda.com/wp-content/uploads/2017/10/niat-sholat-fardhu.jpg', "", floc, { caption: teks })
                } else if (!text) {
                    const sections = [{
                        title: "Niat Sholat",
                        rows: [
                            {title: "Niat Sholat Subuh", rowId: ".niatsholat subuh"},
                            {title: "Niat Sholat Zhuhur", rowId: ".niatsholat dzuhur"},
                            {title: "Niat Sholat Ashar", rowId: ".niatsholat ashar"},
                            {title: "Niat Sholat Maghrib", rowId: ".niatsholat maghrib"},
                            {title: "Niat Sholat Isya", rowId: ".niatsholat isya"}
                        ]
                    }]
                    const listMessage = {
                        text: 'List Niat Sholat',
                        footer: ntiktok,
                        buttonText: 'OPEN LIST',
                        sections
                    }
                    const sendMsg = await akame.sendMessage(m.chat, listMessage, { quoted: m })
                }
            }
            break
            case 'listkota': {
                let anu = await fetchJson(api('zenz', '/islami/listkota', {}, 'apikey'))
                let teks = `List Kota Di seluruh Indonesia\n\n`
                for (let i of anu.result) {
                    teks += `⭔ Provinsi : ${i.provinsi}\n`
                    teks += `⭔ Kota : \n${i.kota.join("\n")}\n`
                    teks += `\n`
                }
                akame.sendText(m.chat, teks, fgclink)
            }
            break
            case 'rules': {
                goblok = fs.readFileSync('./media/sound/menu.mp3')
                akame.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})}
{
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 RULES BOT 」
│└─────────────┈❖
│1. Tolong Gunakan Delay 5 Detik
│   Untuk Menggukan BOT.
│2. Cuilk Bot Tanpa Izin? Group
│   Ya Gua Kudeta 😎.
│2. Gunakan Dengan Bijak.
│3. Don't Call Bots.
│4. Don't Spam Bot.
└┬─────────────┈❖
┌┤「 SNK 」
│└─────────────┈❖
│1. Data Whatsapp Anda Akan Kami
│   Simpan Di Server Kami
│   Selama BOT Aktif.
│2. Data Anda Akan Di Hapus
│   Ketika BOT OFF.
│3. Kami Tidak Menyimpan Gambar/
│   Video/File/Audio/Dokumen
│   Yang Anda Kirim.
│4. Kami Tidak Pernah Meminta
│   Anda Untuk Memberikan
│   Informasi Pribadi.
│5. Jika Menemukan BUG/ERROR
│   Silahkan REPORT!.
└┬─────────────┈❖
┌┤「 ATTENTION 」
│└─────────────┈❖
│1. Bot Akan Memblokir Nomor Anda.
│2. Anda Tidak Akan Bisa.
│   Mengakses Bot Lagi.
│3. Mengeksploitasi Terhadap bot.
│Sanksi: BLOCK PERMANENT
└──────────────┈❖`
                let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, m, {quoted: fkontak})
            }
            break
            case 'sewa':
            case 'sewabot': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 SEWA BOT 」
│└─────────────┈❖
│⭔ 1 Minggu 5k
│⭔ 1 Bulan 15k
└┬─────────────┈❖
┌┤「 PEMBAYARAN 」
│└─────────────┈❖
│⭔ TELKOMSEL : ${global.telkomsel}
│⭔ XL : ${global.xl}
│⭔ INDOSAT : ${global.indosat}
│⭔ TRI : ${global.tri}
│⭔ SMARTFREN : ${global.smartfren}
│⭔ GOPAY : ${global.gopay}
│⭔ DANA : ${global.dana}
│⭔ OVO : ${global.ovo}
│⭔ SAWERIA : ${global.saweria}
└┬─────────────┈❖
┌┤「 KEUNTUNGAN 」
│└─────────────┈❖
│⭔ On 24 Jam
│⭔ Run Dirpd/Heroku/Oktote
│⭔ Anti Delay
│⭔ Anti Virtex
│⭔ Antilink WA/TT/YT
│⭔ Welcome Image
│⭔ Left
└┬─────────────┈❖
┌┤「 SISTEM 」
│└─────────────┈❖
│⭔ Kirim » Bukti Pembayaran » Bot Join
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: '➡️Chat Owner' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'donasi':
            case 'donate': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 DONASI 」
│└─────────────┈❖
│⭔ TELKOMSEL : ${global.telkomsel}
│⭔ XL : ${global.xl}
│⭔ INDOSAT : ${global.indosat}
│⭔ TRI : ${global.tri}
│⭔ SMARTFREN : ${global.smartfren}
│⭔ GOPAY : ${global.gopay}
│⭔ DANA : ${global.dana}
│⭔ OVO : ${global.ovo}
│⭔ SAWERIA : ${global.saweria}
│⭔ Q.S Az-Zalzalah Ayat 7 :
│
فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ│
│
│⭔ Artinya : Maka barangsiapa
│mengerjakan kebaikan seberatzarrah,
│niscaya dia akan melihat
│(balasan)nya.
│
│ *Terima Kasih*
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: '➡️Chat Owner' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'groupmenu':
            case 'menugroup': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 GROUP 」
│└─────────────┈❖
│⭔ ${prefix}linkgroup
│⭔ ${prefix}revoke
│⭔ ${prefix}tagmenu [option]
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgrup full [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}totag [reply]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}antilinkyt [on/off]
│⭔ ${prefix}antilinktt [on/off]
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'downloadmenu':
            case 'menudownload': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 DOWNLOADER 」
│└─────────────┈❖
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}instastory [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}zippyshare [url]
│⭔ ${prefix}mediafire [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'searchmenu':
            case 'menusearch': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 SEARCH 」
│└─────────────┈❖
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'stickermenu':
            case 'menusticker': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 STICKER 」
│└─────────────┈❖
│⭔ ${prefix}sticker
│⭔ ${prefix}stickerwm
│⭔ ${prefix}attp [teks]
│⭔ ${prefix}ttp [teks]
│⭔ ${prefix}mukalu
│⭔ ${prefix}paimon
│⭔ ${prefix}gura
│⭔ ${prefix}doge
│⭔ ${prefix}lovestick
│⭔ ${prefix}animestick
│⭔ ${prefix}patrick
│⭔ ${prefix}emojimix 😎+🤠
│⭔ ${prefix}emojimix2 😎
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'animemenu':
            case 'menuanime': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ANIME 」
│└─────────────┈❖
│⭔ ${prefix}hololive
│⭔ ${prefix}couples
│⭔ ${prefix}couple
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}uniform
│⭔ ${prefix}cosplay
│⭔ ${prefix}maid
│⭔ ${prefix}oppai
│⭔ ${prefix}selfies
│⭔ ${prefix}shinobu
│⭔ ${prefix}akira
│⭔ ${prefix}akiyama
│⭔ ${prefix}ana
│⭔ ${prefix}asuna
│⭔ ${prefix}ayuzawa
│⭔ ${prefix}boruto
│⭔ ${prefix}chitoge
│⭔ ${prefix}deidara
│⭔ ${prefix}doraemon
│⭔ ${prefix}elaina
│⭔ ${prefix}emilia
│⭔ ${prefix}erza
│⭔ ${prefix}gremory
│⭔ ${prefix}hestia
│⭔ ${prefix}hinata
│⭔ ${prefix}inori
│⭔ ${prefix}isuzu
│⭔ ${prefix}itachi
│⭔ ${prefix}itori
│⭔ ${prefix}kaga
│⭔ ${prefix}kagura
│⭔ ${prefix}kakasih
│⭔ ${prefix}kaori
│⭔ ${prefix}keneki
│⭔ ${prefix}kotori
│⭔ ${prefix}kurumi
│⭔ ${prefix}loli
│⭔ ${prefix}madara
│⭔ ${prefix}mikasa
│⭔ ${prefix}miku
│⭔ ${prefix}minato
│⭔ ${prefix}naruto
│⭔ ${prefix}nezuko
│⭔ ${prefix}onepiece
│⭔ ${prefix}pokemon
│⭔ ${prefix}rize
│⭔ ${prefix}sagiri
│⭔ ${prefix}sakura
│⭔ ${prefix}shinka
│⭔ ${prefix}shizuka
│⭔ ${prefix}shouta
│⭔ ${prefix}toukachan
│⭔ ${prefix}tsunade
│⭔ ${prefix}yuki
│⭔ ${prefix}raiden
│⭔ ${prefix}calliope
│⭔ ${prefix}kitagawa
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'asupanmenu':
            case 'menuasupan': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ASUPAN 」
│└─────────────┈❖
│⭔ ${prefix}cecan
│⭔ ${prefix}cogan
│⭔ ${prefix}china
│⭔ ${prefix}japan
│⭔ ${prefix}korea
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}vietnam
│⭔ ${prefix}blankpink
│⭔ ${prefix}justina
│⭔ ${prefix}kpop
│⭔ ${prefix}rose
│⭔ ${prefix}ryujin
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'quotesmenu':
            case 'menuquotes': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 QUOTES 」
│└─────────────┈❖
│⭔ ${prefix}quotesanime
│⭔ ${prefix}animequotes
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}randomquote
│⭔ ${prefix}muslimquote
│⭔ ${prefix}galauquote
│⭔ ${prefix}kanyequote
│⭔ ${prefix}trumpquote
│⭔ ${prefix}trumpthink
│⭔ ${prefix}creepyfact
│⭔ ${prefix}faktaunik
│⭔ ${prefix}puisi
│⭔ ${prefix}pantun
│⭔ ${prefix}cerpen
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'mememenu':
            case 'menumeme': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 MEME 」
│└─────────────┈❖
│⭔ ${prefix}animememe
│⭔ ${prefix}anjing
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjoke
│⭔ ${prefix}darkjokes
│⭔ ${prefix}onecak
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'randommenu':
            case 'menurandom': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 RANDOM 」
│└─────────────┈❖
│⭔ ${prefix}simih [teks]
│⭔ ${prefix}apikey
│⭔ ${prefix}coffe
│⭔ ${prefix}ebinary [teks]
│⭔ ${prefix}dbinary [teks]
│⭔ ${prefix}styletext [teks]
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'textpromenu':
            case 'menutextpro': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 TEXT PRO 」
│└─────────────┈❖
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'photoeditormenu':
            case 'menuphotoeditor': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 PHOTO EDITOR 」
│└─────────────┈❖
│⭔ ${prefix}gay
│⭔ ${prefix}contrast
│⭔ ${prefix}pixelate
│⭔ ${prefix}dither
│⭔ ${prefix}sepia
│⭔ ${prefix}brighten
│⭔ ${prefix}greyscale
│⭔ ${prefix}circle
│⭔ ${prefix}blur
│⭔ ${prefix}invert
│⭔ ${prefix}scale
│⭔ ${prefix}upscale
│⭔ ${prefix}glass
│⭔ ${prefix}wasted
│⭔ ${prefix}passed
│⭔ ${prefix}comrade
│⭔ ${prefix}jail
│⭔ ${prefix}triggered
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'ephotomenu':
            case 'menuephoto': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 EPHOTO 」
│└─────────────┈❖
│⭔ ${prefix}logo2
│⭔ ${prefix}logo3
│⭔ ${prefix}logo4
│⭔ ${prefix}logogaming
│⭔ ${prefix}logogirl
│⭔ ${prefix}logogold
│⭔ ${prefix}spiderlogo
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}awan
│⭔ ${prefix}flower
│⭔ ${prefix}bohlam
│⭔ ${prefix}kaligrafi
│⭔ ${prefix}coklat
│⭔ ${prefix}quotes
│⭔ ${prefix}grafity
│⭔ ${prefix}marmer
│⭔ ${prefix}musimsemi
│⭔ ${prefix}ruby
│⭔ ${prefix}shadowtext
│⭔ ${prefix}starlogo
│⭔ ${prefix}starnight
│⭔ ${prefix}starnight2
│⭔ ${prefix}blackpink
│⭔ ${prefix}cake
│⭔ ${prefix}flashlight
│⭔ ${prefix}puppycute
│⭔ ${prefix}yasuologo
│⭔ ${prefix}certificate
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'gamemenu':
            case 'menugame': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 GAME 」
│└─────────────┈❖
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebakmenu [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'primbonmenu':
            case 'menuprimbon': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 PRIMBON 」
│└─────────────┈❖
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'convertmenu':
            case 'menuconvert': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 CONVERT 」
│└─────────────┈❖
│⭔ ${prefix}nulis
│⭔ ${prefix}removebg [image]
│⭔ ${prefix}toimage [reply sticker]
│⭔ ${prefix}tovideo [reply sticker]
│⭔ ${prefix}togif [reply sticker]
│⭔ ${prefix}tourl [image / video]
│⭔ ${prefix}tovn [reply video]
│⭔ ${prefix}tomp3 [reply video]
│⭔ ${prefix}toaudio [reply video]
│
└───────⭓`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'mainmenu':
            case 'menumain': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 MAIN 」
│└─────────────┈❖
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}donasi
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete / ${prefix}del / ${prefix}d
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}request [req]
│⭔ ${prefix}report [bug]
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'databasemenu':
            case 'menudatabase': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 DATABASE 」
│└─────────────┈❖
│⭔ ${prefix}setcmd [reply sticker/pesan]
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd [reply sticker/pesan]
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'anonymousmenu':
            case 'menuanonymous': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ANONYMOUS CHAT 」
│└─────────────┈❖
│⭔ ${prefix}menfess
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'islamicmenu':
            case 'menuislamic': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ISLAMIC 」
│└─────────────┈❖
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}kisahnabi
│⭔ ${prefix}tafsirsurah
│⭔ ${prefix}jadwalsholat
│⭔ ${prefix}niatsholat
│⭔ ${prefix}kisahmuslim
│⭔ ${prefix}asmaulhusna
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'kerangmenu':
            case 'menukerang': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 KERANG 」
│└─────────────┈❖
│⭔ ${prefix}apakah [teks]
│⭔ ${prefix}bisakah [teks]
│⭔ ${prefix}bagaimanakah [teks]
│⭔ ${prefix}rate [teks]
│⭔ ${prefix}kapankah [teks]
│⭔ ${prefix}cekganteng [teks]
│⭔ ${prefix}cekcantik [teks]
│⭔ ${prefix}ceksange [teks]
│⭔ ${prefix}cekgay [teks]
│⭔ ${prefix}ceklesbi [teks]
│⭔ ${prefix}cekmati [teks]
│⭔ ${prefix}wangy [teks]
│⭔ ${prefix}halah [teks]
│⭔ ${prefix}hilih [teks]
│⭔ ${prefix}huluh [teks]
│⭔ ${prefix}heleh [teks]
│⭔ ${prefix}holoh [teks]
│⭔ ${prefix}jadian [teks]
│⭔ ${prefix}jodohku [teks]
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'voicemenu':
            case 'menuvoice': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 VOICE CHANGER 」
│└─────────────┈❖
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'stalkmenu':
            case 'menustalk': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 STALK 」
│└─────────────┈❖
│⭔ ${prefix}cekapi
│⭔ ${prefix}githubstalk [username]
│⭔ ${prefix}stalk [option] [query]
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'ownermenu':
            case 'menuowner': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 OWNER 」
│└─────────────┈❖
│⭔ ${prefix}setnamabot
│⭔ ${prefix}setbiobot
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}autosw
│⭔ ${prefix}shutdown
│⭔ ${prefix}myip
│⭔ ${prefix}setexif
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot full [image]
│⭔ ${prefix}setstatus
│⭔ ${prefix}setnamebot
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'webzonemenu':
            case 'menuwebzone': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 WEBZONE 」
│└─────────────┈❖
│⭔ ${prefix}jadwaltv
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'wallpapermenu':
            case 'menuwalpaper': {
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 WALLPAPER 」
│└─────────────┈❖
│⭔ ${prefix}cyberspace
│⭔ ${prefix}mountain
│⭔ ${prefix}programming
│⭔ ${prefix}technology
│⭔ ${prefix}aesthetic
│⭔ ${prefix}boneka
│⭔ ${prefix}hekel
│⭔ ${prefix}kucing
│⭔ ${prefix}mobil
│⭔ ${prefix}motor
│⭔ ${prefix}pubg
│⭔ ${prefix}wallhp
└──────────────┈❖`
                let buttons = [{ buttonId: 'command', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            akame.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            case 'list':
            case 'menu':
            case 'help':
            case '?': {
                goblok = fs.readFileSync('./media/sound/menu.mp3')
                akame.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})}
{
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 NOTE 」
│└─────────────┈❖
│• Saya ${global.namabot}, Bot Ini Adalah
│  Beta Multi-Device WhatsApp.
│• Jika Kamu Menemukan Semacam
│  Bug Atau Kesalahan Mohon
│  Dimaklumi Dulu Ya,Ketik Report
│  Untuk Lapor Owner Agar Segera
│  Diperbaiki Atau DiFix.
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│• Library : *Baileys-MD*.
│• Prefix : ( ${prefix} )
│• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
│• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│• Total Hit : ${jumlahcmd}
│• Total Hit Today : ${jumlahharian}
│• Menuju HBD GuaAbuzz :
│   ${menuju}
│• Wib : ${wib}
│• Wita : ${wita}
│• Wit : ${wit}
└──────────────┈❖`
            let ments = [ownernya, me, ini_mark]
            let buttons = [{ buttonId: 'command', buttonText: { displayText: '📖Simple Menu' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : akulaku + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: anu,
  footer: ntiktok,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'GuaAbuzz Creator',
  body: 'Follow My TikTok', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: myttv,
  sourceUrl: mytt
  }}
  }
  akame.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
  akame.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
            case 'allmenu':
            case 'menuall': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│ Prefix : ( ${prefix} )
│ Name : ${global.namabot}\n│ Owner : ${global.namaowner}
│ Mode : ${akame.public ? 'Public' : 'Self'}
│ User : ${Object.keys(global.db.data.users).length}
│ Total Hit : ${jumlahcmd}
│ Total Hit Today : ${jumlahharian}
│ Premium : ${isPremium ? '✅' : `❌`}
│ Limit : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│ Runtime : ${runtime(process.uptime())}
│ Lib : Baileys-md
│ Menuju HBD GuaAbuzz :
│  ${menuju}
└┬─────────────┈❖
┌┤「 ANONYMOUS CHAT 」
│└─────────────┈❖
│⭔ ${prefix}menfess
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
└┬─────────────┈❖
┌┤「 ANIME 」
│└─────────────┈❖
│⭔ ${prefix}hololive
│⭔ ${prefix}couples
│⭔ ${prefix}couple
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}neko
│⭔ ${prefix}uniform
│⭔ ${prefix}cosplay
│⭔ ${prefix}maid
│⭔ ${prefix}oppai
│⭔ ${prefix}selfies
│⭔ ${prefix}shinobu
│⭔ ${prefix}akira
│⭔ ${prefix}akiyama
│⭔ ${prefix}ana
│⭔ ${prefix}asuna
│⭔ ${prefix}ayuzawa
│⭔ ${prefix}boruto
│⭔ ${prefix}chitoge
│⭔ ${prefix}deidara
│⭔ ${prefix}doraemon
│⭔ ${prefix}elaina
│⭔ ${prefix}emilia
│⭔ ${prefix}erza
│⭔ ${prefix}gremory
│⭔ ${prefix}hestia
│⭔ ${prefix}hinata
│⭔ ${prefix}inori
│⭔ ${prefix}isuzu
│⭔ ${prefix}itachi
│⭔ ${prefix}itori
│⭔ ${prefix}kaga
│⭔ ${prefix}kagura
│⭔ ${prefix}kakasih
│⭔ ${prefix}kaori
│⭔ ${prefix}keneki
│⭔ ${prefix}kotori
│⭔ ${prefix}kurumi
│⭔ ${prefix}loli
│⭔ ${prefix}madara
│⭔ ${prefix}mikasa
│⭔ ${prefix}miku
│⭔ ${prefix}minato
│⭔ ${prefix}naruto
│⭔ ${prefix}nezuko
│⭔ ${prefix}onepiece
│⭔ ${prefix}pokemon
│⭔ ${prefix}rize
│⭔ ${prefix}sagiri
│⭔ ${prefix}sakura
│⭔ ${prefix}shinka
│⭔ ${prefix}shizuka
│⭔ ${prefix}shouta
│⭔ ${prefix}toukachan
│⭔ ${prefix}tsunade
│⭔ ${prefix}yuki
│⭔ ${prefix}raiden
│⭔ ${prefix}calliope
│⭔ ${prefix}kitagawa
└┬─────────────┈❖
┌┤「 ASUPAN 」
│└─────────────┈❖
│⭔ ${prefix}cecan
│⭔ ${prefix}cogan
│⭔ ${prefix}china
│⭔ ${prefix}japan
│⭔ ${prefix}korea
│⭔ ${prefix}indonesia
│⭔ ${prefix}malaysia
│⭔ ${prefix}thailand
│⭔ ${prefix}vietnam
│⭔ ${prefix}blankpink
│⭔ ${prefix}justina
│⭔ ${prefix}kpop
│⭔ ${prefix}rose
│⭔ ${prefix}ryujin
└┬─────────────┈❖
┌┤「 CONVERT 」
│└─────────────┈❖
│⭔ ${prefix}nulis
│⭔ ${prefix}removebg [image]
│⭔ ${prefix}toimage [reply sticker]
│⭔ ${prefix}tovideo [reply sticker]
│⭔ ${prefix}togif [reply sticker]
│⭔ ${prefix}tourl [image / video]
│⭔ ${prefix}tovn [reply video]
│⭔ ${prefix}tomp3 [reply video]
│⭔ ${prefix}toaudio [reply video]
└┬─────────────┈❖
┌┤「 DOWNLOADER 」
│└─────────────┈❖
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}instastory [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}zippyshare [url]
│⭔ ${prefix}mediafire [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
└┬─────────────┈❖
┌┤「 DATABASE 」
│└─────────────┈❖
│⭔ ${prefix}setcmd [reply sticker/pesan]
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd [reply sticker/pesan]
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
└┬─────────────┈❖
┌┤「 EPHOTO 」
│└─────────────┈❖
│⭔ ${prefix}logo2
│⭔ ${prefix}logo3
│⭔ ${prefix}logo4
│⭔ ${prefix}logogaming
│⭔ ${prefix}logogirl
│⭔ ${prefix}logogold
│⭔ ${prefix}spiderlogo
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}awan
│⭔ ${prefix}flower
│⭔ ${prefix}bohlam
│⭔ ${prefix}kaligrafi
│⭔ ${prefix}coklat
│⭔ ${prefix}quotes
│⭔ ${prefix}grafity
│⭔ ${prefix}marmer
│⭔ ${prefix}musimsemi
│⭔ ${prefix}ruby
│⭔ ${prefix}shadowtext
│⭔ ${prefix}starlogo
│⭔ ${prefix}starnight
│⭔ ${prefix}starnight2
│⭔ ${prefix}blackpink
│⭔ ${prefix}cake
│⭔ ${prefix}flashlight
│⭔ ${prefix}puppycute
│⭔ ${prefix}yasuologo
│⭔ ${prefix}certificate
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
└┬─────────────┈❖
┌┤「 GROUP 」
│└─────────────┈❖
│⭔ ${prefix}linkgroup
│⭔ ${prefix}revoke 
│⭔ ${prefix}tagmenu [option]
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgrup full [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}totag [reply]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}antilinkyt [on/off]
│⭔ ${prefix}antilinktt [on/off]
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
└┬─────────────┈❖
┌┤「 GAME 」
│└─────────────┈❖
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebakmenu [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
└┬─────────────┈❖
┌┤「 ISLAMIC 」
│└─────────────┈❖
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}kisahnabi
│⭔ ${prefix}tafsirsurah
│⭔ ${prefix}jadwalsholat
│⭔ ${prefix}niatsholat
│⭔ ${prefix}kisahmuslim
│⭔ ${prefix}asmaulhusna
└┬─────────────┈❖
┌┤「 KERANG 」
│└─────────────┈❖
│⭔ ${prefix}apakah [teks]
│⭔ ${prefix}bisakah [teks]
│⭔ ${prefix}bagaimanakah [teks]
│⭔ ${prefix}rate [teks]
│⭔ ${prefix}kapankah [teks]
│⭔ ${prefix}cekganteng [teks]
│⭔ ${prefix}cekcantik [teks]
│⭔ ${prefix}ceksange [teks]
│⭔ ${prefix}cekgay [teks]
│⭔ ${prefix}ceklesbi [teks]
│⭔ ${prefix}cekmati [teks]
│⭔ ${prefix}wangy [teks]
│⭔ ${prefix}halah [teks]
│⭔ ${prefix}hilih [teks]
│⭔ ${prefix}huluh [teks]
│⭔ ${prefix}heleh [teks]
│⭔ ${prefix}holoh [teks]
│⭔ ${prefix}jadian [teks]
│⭔ ${prefix}jodohku [teks]
└┬─────────────┈❖
┌┤「 MEME 」
│└─────────────┈❖
│⭔ ${prefix}animememe
│⭔ ${prefix}anjing
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjoke
│⭔ ${prefix}darkjokes
│⭔ ${prefix}onecak
└┬─────────────┈❖
┌┤「 MAIN 」
│└─────────────┈❖
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}donasi
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete / ${prefix}del / ${prefix}d
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}request [req]
│⭔ ${prefix}report [bug]
└┬─────────────┈❖
┌┤「 OWNER 」
│└─────────────┈❖
│⭔ ${prefix}setnamabot
│⭔ ${prefix}setbiobot
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}shutdown
│⭔ ${prefix}autosw
│⭔ ${prefix}myip
│⭔ ${prefix}setexif
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot full [image]
│⭔ ${prefix}setstatus
│⭔ ${prefix}setnamebot
└┬─────────────┈❖
┌┤「 PRIMBON 」
│└─────────────┈❖
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
└┬─────────────┈❖
┌┤「 PHOTO EDITOR 」
│└─────────────┈❖
│⭔ ${prefix}gay
│⭔ ${prefix}contrast
│⭔ ${prefix}pixelate
│⭔ ${prefix}dither
│⭔ ${prefix}sepia
│⭔ ${prefix}brighten
│⭔ ${prefix}greyscale
│⭔ ${prefix}circle
│⭔ ${prefix}blur
│⭔ ${prefix}invert
│⭔ ${prefix}scale
│⭔ ${prefix}upscale
│⭔ ${prefix}glass
│⭔ ${prefix}wasted
│⭔ ${prefix}passed
│⭔ ${prefix}comrade
│⭔ ${prefix}jail
│⭔ ${prefix}triggered
└┬─────────────┈❖
┌┤「 QUOTES 」
│└─────────────┈❖
│⭔ ${prefix}quotesanime
│⭔ ${prefix}animequotes
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}randomquote
│⭔ ${prefix}muslimquote
│⭔ ${prefix}galauquote
│⭔ ${prefix}kanyequote
│⭔ ${prefix}trumpquote
│⭔ ${prefix}trumpthink
│⭔ ${prefix}creepyfact
│⭔ ${prefix}faktaunik
│⭔ ${prefix}puisi
│⭔ ${prefix}pantun
│⭔ ${prefix}cerpen
└┬─────────────┈❖
┌┤「 RANDOM 」
│└─────────────┈❖
│⭔ ${prefix}simih [teks]
│⭔ ${prefix}apikey
│⭔ ${prefix}coffe
│⭔ ${prefix}ebinary [teks]
│⭔ ${prefix}dbinary [teks]
│⭔ ${prefix}styletext [teks]
└┬─────────────┈❖
┌┤「 STICKER 」
│└─────────────┈❖
│⭔ ${prefix}sticker
│⭔ ${prefix}stickerwm
│⭔ ${prefix}attp [teks]
│⭔ ${prefix}ttp [teks]
│⭔ ${prefix}mukalu
│⭔ ${prefix}paimon
│⭔ ${prefix}gura
│⭔ ${prefix}doge
│⭔ ${prefix}lovestick
│⭔ ${prefix}animestick
│⭔ ${prefix}patrick
│⭔ ${prefix}emojimix 😎+🤠
│⭔ ${prefix}emojimix2 😎
└┬─────────────┈❖
┌┤「 SEARCH 」
│└─────────────┈❖
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
└┬─────────────┈❖
┌┤「 STALK 」
│└─────────────┈❖
│⭔ ${prefix}cekapi
│⭔ ${prefix}githubstalk [username]
│⭔ ${prefix}stalk [option] [query]
└┬─────────────┈❖
┌┤「 TEXT PRO 」
│└─────────────┈❖
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
└┬─────────────┈❖
┌┤「 VOICE CHANGER 」
│└─────────────┈❖
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
└┬─────────────┈❖
┌┤「 WEBZONE 」
│└─────────────┈❖
│⭔ ${prefix}jadwaltv
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
└┬─────────────┈❖
┌┤「 WALLPAPER 」
│└─────────────┈❖
│⭔ ${prefix}cyberspace
│⭔ ${prefix}mountain
│⭔ ${prefix}programming
│⭔ ${prefix}technology
│⭔ ${prefix}aesthetic
│⭔ ${prefix}boneka
│⭔ ${prefix}hekel
│⭔ ${prefix}kucing
│⭔ ${prefix}mobil
│⭔ ${prefix}motor
│⭔ ${prefix}pubg
│⭔ ${prefix}wallhp
└──────────────┈❖`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
            await akame.sendButtonText(m.chat, buttons, anu, ntiktok, fkontak)
            }
            break
            default:
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        	let buttons = [
                    { buttonId: `owner`, buttonText: { displayText: 'Chat Owner' }, type: 1 }
                ]
			akame.sendMessage(m.chat, { text:`INVITE DETECT\n\nMau masukin bot ini ke group kamu?`, title: 'LINK GROUP DECTETED', footer: '© 2022 GuaAbuzz', buttons: buttons, headerType: 5 })
		}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    akame.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        console.log("error di bagian akame.js "+util.format(err))
    //  m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})