import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { faker } from '@faker-js/faker';
import { AuthModule } from '../../modules/auth.module';
import { authReturn } from './mock/auth.mock';

const user = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
};

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('root', () => {
    it('should test user login"', async () => {
      const signInMock = jest
        .spyOn(service, 'signIn')
        .mockResolvedValue(authReturn);

      const authService = await service.signIn(user.username, user.password);

      expect(signInMock).toBeCalled();
      expect(authService).toBe(authReturn);
    });
  });
});
