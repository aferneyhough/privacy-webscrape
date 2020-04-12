const puppeteer = require('puppeteer');

(async () => {
    let launchOptions = { headless: false, args: ['--start-maximized'] };
    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    let username = '/html/body/p[1]'
    let job = '/html/body/p[2]'
    let content = '/html/body/p[3]'

    await page.goto('W:/scraper/example.html', {
    	timeout:100
    });

    await page.waitForXPath(fullxpath, {
    	timeout:100
    });

    // retrieve text
    let xpath = await page.$x(fullxpath);
    let txt = await page.evaluate(el => el.textContent, xpath[0]);

    console.log(txt);
    await browser.close();
})();