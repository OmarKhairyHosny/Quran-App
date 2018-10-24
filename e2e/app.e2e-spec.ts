import { QuranAppPage } from './app.po';

describe('quran-app App', function() {
  let page: QuranAppPage;

  beforeEach(() => {
    page = new QuranAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
