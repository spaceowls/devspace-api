import { config } from '../swagger.util';

describe('Swagger', () => {
  it('should return config', () => {
    expect(config.info).toBeDefined();
  });
});
