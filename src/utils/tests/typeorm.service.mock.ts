import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmMock: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'test',
  database: 'test',
  username: 'test',
  password: 'test',
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/migrations/*.{ts,js}'],
  migrationsTableName: 'typeorm_migrations',
  logger: 'file',
  synchronize: true,
};
