import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmConfigService } from '../typeorm.service';
import { typeOrmMock } from './typeorm.service.mock';
import { ConfigService } from '@nestjs/config';

let service: TypeOrmConfigService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      TypeOrmConfigService,
      {
        provide: ConfigService,
        useValue: {
          get() {
            return 'test';
          },
        },
      },
    ],
  }).compile();

  service = module.get<TypeOrmConfigService>(TypeOrmConfigService);
});

describe('TypeORM', () => {
  it('should be defined', () => {
    expect(TypeOrmConfigService).toBeDefined();
    expect(service.createTypeOrmOptions()).toBeDefined();
  });

  it('should return options correctly', () => {
    expect(service.createTypeOrmOptions()).toEqual(typeOrmMock);
  });
});
