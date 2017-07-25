import { VmlVer5Page } from './app.po';

describe('vml-ver5 App', () => {
  let page: VmlVer5Page;

  beforeEach(() => {
    page = new VmlVer5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
