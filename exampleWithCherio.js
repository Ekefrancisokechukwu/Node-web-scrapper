const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://brightdata.com/";

async function performScraping() {
  const axiosResponse = await axios.request({
    method: "GET",
    url: URL,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  const cards = [];

  const $ = cheerio.load(axiosResponse.data);
  $(".cards")
    .find(".card")
    .each((index, element) => {
      const pageUrl = $(element).attr("href");
      const pageImg = $(element).find(".card__image img").attr("data-lazy-src");
      const title = $(element).find(".body_bold").text();
      const card = {
        pageUrl,
        pageImg,
        title,
      };

      cards.push(card);
    });

  console.log(cards);
}

performScraping();
