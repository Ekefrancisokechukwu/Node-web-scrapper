const puppeteer = require("puppeteer");

async function start() {
  const URL = "https://ekefrancisokechukwu.vercel.app/";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  await page.screenshot({ path: "amzing.png", fullPage: true });
  await browser.close();
}

start();

console.log("App running...");
