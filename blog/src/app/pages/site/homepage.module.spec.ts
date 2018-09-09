import { HomePageModule } from './homepage.module';

describe('SiteModule', () => {
  let siteModule: HomePageModule;

  beforeEach(() => {
    siteModule = new HomePageModule();
  });

  it('should create an instance', () => {
    expect(HomePageModule).toBeTruthy();
  });
});
