import { PapaBiblePage } from './app.po';

describe('papa-bible App', () => {
  let page: PapaBiblePage;

  beforeEach(() => {
    page = new PapaBiblePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hc works!');
  });
});
