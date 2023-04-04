import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('DevSpace API')
  .setDescription('DevSpace project API')
  .setVersion('1.0')
  .build();
