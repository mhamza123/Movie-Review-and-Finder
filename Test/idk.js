const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');

const prompt = require('prompt-sync')();
const name = prompt('Please enter movie name:');
const urlspace = encodeURIComponent(name);
const url = `https://imdb.com/find/?q=${urlspace}`;
console.log(url);
async function scrape(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.imdb.com/title/tt0096895/mediaviewer/rm1225693184/?ref_=tt_ov_i');
    //await driver.findElement(By.css(".ipc-metadata-list-summary-item")).click();
    //let description = await driver.findElement(By.xpath("//span[contains(@class,'sc-7193fc79-0')]"));
    //await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    //let firstResult = await driver.findElement(By.css('h3'));
    //console.log(await description.getAttribute('textContent'));
    //await driver.findElement(By.css(".ipc-lockup-overlay__screen")).click();
    let image = await driver.findElement(By.css(".sc-7c0a9e7c-0.fEIEer.peek"));
    console.log(await image.getAttribute('src'));

}

scrape();