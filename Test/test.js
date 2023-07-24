const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');

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

}

scrape();