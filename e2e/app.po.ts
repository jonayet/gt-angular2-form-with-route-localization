import { browser, element, by } from 'protractor';

export class GtAngular2FormWithRouteLocalizationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
