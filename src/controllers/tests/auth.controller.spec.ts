import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../../services/auth.service';
import { faker } from '@faker-js/faker';
import { AuthModule } from '../../modules/auth.module';
import { authReturn } from '../../services/tests/mock/auth.mock';

describe('AuthController', () => {
  let authController: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    authController = app.get<AuthController>(AuthController);
    service = app.get<AuthService>(AuthService);
  });

  describe('Singin', () => {
    it('should return token', async () => {
      jest.spyOn(service, 'signIn').mockResolvedValue(authReturn);

      expect(
        await authController.signIn({
          username: faker.internet.userName(),
          password: faker.internet.password(),
        }),
      ).toBe(authReturn);
    });
  });
});
