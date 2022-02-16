const {Builder, By, Key, until} = require('selenium-webdriver');
let driver;
let options = {
    url: 'https://www.google.com',
    keyword: 'Suche',
    name: 'q', // Suchfeld von Google
    className: 'brWULd', // Sprachausgabe ausführen falls vorhanden!
    openSettings: 'z1asCe E9hVAb', // Einstellungen öffnen Chrome
}

openURL(options) // openURL('https://www.google.com','Suche');

// GOOGLE SEARCH ----------------------------------------------------------
async function openURL({url, keyword, name, className, openSettings}) {
    driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);
        await clickXPath('Ich stimme zu' || 'Cookies zulassen' || 'Auswahl erlauben')
        // await driver.findElement(By.name(name)).sendKeys(keyword, Key.RETURN);
        await clickName(name, keyword);
        await clickClassName(className);
        await clickClassName(openSettings);
    } finally {
        setTimeout(() => {
            driver.quit()
        }, 5000)
    }
};
// GOOGLE SEARCH END ----------------------------------------------------------


const clickXPath = async (xpath) => {
    await driver.findElement(By.xpath("//*[text()='" + xpath + "']")).click();
}
const clickID = async (id) => {
    await driver.findElement(By.id(id)).click();
}
const clickCSS = async (css) => {
    await driver.findElement(By.css(css)).click();
}
const clickClassName = async (className) => {
    await driver.findElement(By.className(className)).click();
}

const clickLinkText = async (text) => {
    await driver.findElement(By.linkText(text)).click();
}
const clickName = async (name, keyword) => {
    await driver.findElement(By.name(name)).sendKeys(keyword, Key.RETURN)
}
