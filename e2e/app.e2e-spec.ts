import { AiraWikiPage } from './app.po';

describe('aira-wiki App', function() {
  let page: AiraWikiPage;

  beforeEach(() => {
    page = new AiraWikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
