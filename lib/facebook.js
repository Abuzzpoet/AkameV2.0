const cheerio = require('cheerio')
const axios = require('axios')
const { UserAgent } = require('./myfunc')

async function request(url, config) {
    return axios(url, config);
}

exports.fbdl = async(url) => {
    let token, result, agent = UserAgent();
    try {
      // get token
      token = await request("https://downvideo.net", {
        method: "GET",
        headers: {
          accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,
          "accept-language": `id,en-US;q=0.9,en;q=0.8,es;q=0.7,ms;q=0.6`,
          "sec-fetch-user": `?1`,
          "User-Agent": agent,
        },
      });
      const $token = cheerio.load(token.data);
      token = $token('input[name="token"]').attr("value") ?? null;
      // post data
      result = await request("https://downvideo.net/download.php", {
        data: new URLSearchParams(Object.entries({ URL: url, token })),
        method: "POST",
        headers: {
          accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,
          "accept-language": `id,en-US;q=0.9,en;q=0.8,es;q=0.7,ms;q=0.6`,
          "sec-fetch-user": `?1`,
          "content-type": `application/x-www-form-urlencoded`,
          "User-Agent": agent,
        },
       });
       const $rootDl = cheerio.load(result.data);
       result = []
       $rootDl('div[class="col-md-10"]')
       .find("a")
       .each((a, b) => {
         let dl = $rootDl(b).attr("href");
         let rex = /(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;
         if (rex.test(dl)) {
           result.push(dl);
         }
       });
     } catch (e) {
       throw e.message;
     } finally {
       return result;
     }
}
