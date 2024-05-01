import { Page } from 'playwright';

export class BusinessPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getTeamNames() {
        await this.page.waitForSelector('.sp-c-fixture__wrapper');
        return await this.page.$$eval('.sp-c-fixture__team-name', nodes => nodes.map(node => node.textContent?.trim() || ''));
    }
}
