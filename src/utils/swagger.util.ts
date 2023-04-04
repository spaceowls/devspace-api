import { DocumentBuilder } from '@nestjs/swagger';
import { version } from 'package.json';

export const config = new DocumentBuilder()
  .setTitle('DevSpace API')
  .setDescription('DevSpace project API')
  .setVersion(version)
  .build();
