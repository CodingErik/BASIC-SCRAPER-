// starting set up for you scraping adventure 
const puppeteer = require('puppeteer')

async function scraperProduct(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [el] = await page.$x('') // grab an element via xpath 

    console.log({el}) // console log to see the selected element

    browser.close(); // always close the browser or else it will remain open 
}

scraperProduct() // place your url here and have fun! 
