import { AccessModule } from './access.module';

describe('AccessModule', () => {
  let accessModule: AccessModule;

  beforeEach(() => {
    accessModule = new AccessModule();
  });

  it('should create an instance', () => {
    expect(accessModule).toBeTruthy();
  });
});
