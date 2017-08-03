import { NgtubeSearchPage } from './app.po';

describe('ngtube-search App', () => {
  let page: NgtubeSearchPage;

  beforeEach(() => {
    page = new NgtubeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
