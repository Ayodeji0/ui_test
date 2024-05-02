import { Page } from 'playwright';

export class SearchResultsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getHeadings() {
        await this.page.waitForSelector('text=SportSportsceneTotal Sport', { timeout: 40000 }); // Increase timeout to 30 seconds
        const headings = await this.page.$$('text=SportSportsceneTotal Sport >> css=li');
        const innerTextPromises = headings.map(async (heading) => await heading.innerText());
        return await Promise.all(innerTextPromises);
    }
}
