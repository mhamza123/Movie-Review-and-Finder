const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');
const axios = require('axios');
const fs = require('fs');

const prompt = require('prompt-sync')();
const name = prompt('Please enter movie name:');
const urlspace = encodeURIComponent(name);
const url = `https://imdb.com/find/?q=${urlspace}`;
console.log(url);
async function scrape(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get(url);
    await driver.findElement(By.css(".ipc-metadata-list-summary-item")).click();
    let description = await driver.findElement(By.xpath("//span[contains(@class,'sc-7193fc79-0')]"));
    //await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    //let firstResult = await driver.findElement(By.css('h3'));
    console.log(await description.getAttribute('textContent'));
    let review = await driver.findElement(By.xpath("//span[contains(@class,'sc-bde20123-1')]"));
    console.log(await review.getAttribute('textContent'));
    await driver.findElement(By.css(".ipc-lockup-overlay__screen")).click();
    //let image = await driver.findElement(By.xpath("//img[contains(@class,'.sc-7c0a9e7c-0.fEIEer')]"));
    let image = await driver.findElement(By.css(".sc-7c0a9e7c-0.fEIEer"));
    imageUrl = await image.getAttribute('src');
    console.log(imageUrl);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const fileName = 'movie_cover.jpg';
    fs.writeFileSync(fileName, response.data);
    console.log('Image downloaded successfully.');

}

scrape();