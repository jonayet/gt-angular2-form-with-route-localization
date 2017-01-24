import { GtAngular2FormWithRouteLocalizationPage } from './app.po';

describe('gt-angular2-form-with-route-localization App', function() {
  let page: GtAngular2FormWithRouteLocalizationPage;

  beforeEach(() => {
    page = new GtAngular2FormWithRouteLocalizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
