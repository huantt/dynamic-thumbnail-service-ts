import puppeteer, {Browser, Page} from 'puppeteer';

let _page: Page;

function getPage():Promise<Page> {
    return new Promise(((resolve, reject) => {
        if (_page) {
            return resolve(_page);
        }
        puppeteer.launch({
            headless: true,
            args: ['--no-sandbox']
        }).then((browser: Browser) => {
            return browser.newPage();
        }).then(page => {
            _page = page
            return resolve(_page)
        }).catch(err => {
            reject(err)
        });
    }))
}

function screenshot(url: string, width: number, height: number) {
    return getPage().then((page: Page) => {
        return page.setViewport({width: width, height: height}).then(() => {
            return page
        })
    }).then((page) => {
        return page.goto(url).then(() => {
            return page
        });
    }).then((page) => {
        return page.screenshot();
    })
}

export {screenshot}