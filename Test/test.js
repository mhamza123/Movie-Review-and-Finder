const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');

async function scrape(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.imdb.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    let firstResult = await driver.findElement(By.css('h3'));
    console.log(await firstResult.getAttribute('textContent'));

}
const prompt = require('prompt-sync')();
const name = prompt('Please enter movie name:');
const urlspace = encodeURIComponent(name);
const url = `/find/?q=${urlspace}`;

console.log(url);
//scrape();