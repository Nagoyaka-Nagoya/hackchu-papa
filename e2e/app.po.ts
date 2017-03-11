import { browser, element, by } from 'protractor';

export class PapaBiblePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hc-root h1')).getText();
  }
}
