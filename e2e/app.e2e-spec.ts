import { YtSearchboxAppPage } from './app.po';

describe('yt-searchbox-app App', () => {
  let page: YtSearchboxAppPage;

  beforeEach(() => {
    page = new YtSearchboxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
