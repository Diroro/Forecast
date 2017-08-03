import { AngularWeatherAppPage } from './app.po';

describe('angular-weather-app App', () => {
  let page: AngularWeatherAppPage;

  beforeEach(() => {
    page = new AngularWeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
