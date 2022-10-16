# CATATAN ( NOTE )
Mulai saat ini, script ini tidak akan dilanjutkan lagi, jika ingin menambah sesuatu lebih baik dibuat pribadi aja, malah keren itu lhu punya tapi yang lain kaga jadi lhu bisa jual tu fitur kalo di publik di script ini mungkin kalian akan rugi sendiri, sudah susah-susah bikin code tapi malah dijual Ama yang cuma modal nyomot doang & dibuat konten yt, yutuber untung yang buat kaga, tapi terserah kalian juga kalo mau pull ya tetep saya ACC

Kalo mau jualan normal aja, jangan sampe nipu atau memberi harapan kosong, contohnya "dijual fitur langkah ada storenya 😱", gabaik itu, mau untung boleh tapi jangan sampe merugikan orang lain 

Best Regards. GuaAbuzz

<p align="center">
<img src="https://i.ibb.co/bvCb4Pr/Akame.jpg" alt="Akame" width="500"/>
</p>
<h1 align="center">AkameV2.0</h1>
<p align="center">
  <a href="https://github.com/Abuzzpoet"><img src="http://readme-typing-svg.herokuapp.com?color=FFFFFF&center=true&vCenter=true&multiline=false&lines=Akame+BOT+Multi+Device;Base+ori+by+DikaArdnt;Recode+By+GuaAbuzz;Give+star+and+forks+this+Repo+:D;Follow+My+Github" alt="UwU">
</p>

---------

# Media Sosial Bot
<p align="center">
  <a href="https://wa.me/6282171978174?text=Menu"><img src="https://img.shields.io/badge/WhatsApp%20Bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
  <a href="https://chat.whatsapp.com/FGmVjFYJBjjGst62qwNKJB"><img src="https://img.shields.io/badge/WhatsApp%20Grup-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
</p>

---------

# Note
This Script is for everyone, not for Sale. Jika dijual neraka menunggumu brother !

## My Projects
<p align="center">
  <a href="https://github.com/Abuzzpoet/AkameV2.0"><img src="https://img.shields.io/badge/Github%20AkameV2.0-252525?style=for-the-badge&logo=Github&logoColor=white"/> 
  <a href="https://github.com/Abuzzpoet/databasee"><img src="https://img.shields.io/badge/Github%20Database%20Bot-252525?style=for-the-badge&logo=Github&logoColor=white"></a>
</p>

## Heroku Buildpack
<p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/Abuzzpoet/AkameV2.0"><img src="https://www.herokucdn.com/deploy/button.svg"/> 
  <a href="https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"><img src="https://img.shields.io/badge/BuildPack%20FFMPEG-9370DB?style=for-the-badge&logo=heroku&logoColor=white">
  <a href="https://github.com/clhuang/heroku-buildpack-webp-binaries.git"><img src="https://img.shields.io/badge/BuildPack%20IMAGEMAGICK-9370DB?style=for-the-badge&logo=heroku&logoColor=white"></a>
</p>

## Okteto
<p align="center">
  <a href="https://cloud.okteto.com"><img src="https://okteto.com/develop-okteto.svg"></a>
</p>

```bash
Login with your github
Click Launch Dev Environment
Choose your repo
```

---------

## Untuk Pengguna Windows/rdp

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)

```bash
git clone https://github.com/Abuzzpoet/AkameV2.0
cd AkameV2.0
npm install
```

## How To Connect To Mongodb When Run In Heroku

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `worker: node . --db 'mongourl'`
* Example `worker: node . -- db 'Your Mongo URI'`
* Example `worker: node . -- db 'mongodb+srv://Akame:AkameChan@guaabuzz.s0w7qrh.mongodb.net/?retryWrites=true&w=majority'`
## For Termux/ubuntu/ssh User

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
git clone https://github.com/Abuzzpoet/AkameV2.0
cd AkameV2.0
npm install
```

## Recommended Install On Termux

```bash
pkg install yarn
yarn
```

## Installing
```bash
$ node .
```

---------

# ❗ Warning
WhatsApp bot is still in the development stage, so there are a few bugs
WhatsApp Connection (BETA, not working perfectly)

Editing Number Owner & session name in [`config.js`](https://github.com/Abuzzpoet/AkameV2.0/blob/master/config.js)

```How To Customise Message Display```
```js
//—————「 Website Apikey 」—————//
//gausah di apa² ini, Beli Sendiri banh :)
global.APIKeys = {
    'https://zenzapis.xyz':'GetApiKey',
}

//—————「 Set Nama Bot & Own 」—————//
//terserah mau ubah atau nggak
global.namabot = 'Akame'
global.namaowner = 'GuaAbuzz'

//—————「 Setting Owner 」—————//
//terserah mau ubah atau nggak
global.owner = ['6289636827082']
global.premium = ['6289636827082']

//—————「 Setting Nomor Donasi/Sewabot 」—————//
//ubah aja kalau ada yg gapunya kasih tanda '-'
global.telkomsel = ['6282171978174']
global.xl = ['-']
global.indosat = ['-']
global.tri = ['6289636827082']
global.smartfren = ['-']
global.gopay = ['6289636827082']
global.dana = ['6289636827082']
global.ovo = ['-']
global.saweria = ['https://saweria.co/GuaAbuzz']

//—————「 Set Kebutuhan Button 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :)
global.github = 'https://github.com/Abuzzpoet'

//—————「 Set Sticker Wm 」—————//
//terserah mau ubah atau nggak
global.packname = 'GuaAbuzz'
global.author = 'WhatsApp Bot'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: 'Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: 'Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 50,
}
```
---------

# Apikey
* Get Apikey zenz on [`Zenz`](https://zenzapis.xyz/)

## Thanks To
* [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`Mhankbarbar`](https://github.com/MhankBarBar)
* [`Faiz`](https://github.com/FaizBastomi)
* [`Gimenz`](https://github.com/Gimenz)
* [`rayy`](https://github.com/rayyreall)
* [`GuaAbuzz`](https://github.com/Abuzzpoet)
* [`FatihArridho`](https://github.com/FatihArridho)
* [`Pa7rick`](https://github.com/pa7rickr)
* [`RidhoUhuy`](https://github.com/Atak676) 
* [`zhwzein`](https://github.com/zhwzein)
* [`CAF-ID`](https://github.com/CAF-ID)
* [`bintang`](https://github.com/Bintangp02)

```Thanks to all who have participated in the development of this script```


License: [MIT](https://en.wikipedia.org/wiki/MIT_License)

Support Me
* [`Saweria`](https://saweria.co/GuaAbuzz)
* [`Gopay`](https://i.ibb.co/dGwfqRT/Gopay.jpg)
* [`Dana`](https://i.ibb.co/MN3mmMB/Dana.jpg)
