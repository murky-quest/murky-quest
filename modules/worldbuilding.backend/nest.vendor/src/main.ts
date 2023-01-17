import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*', // TODO: change/narrow it along with infra/config
    },
  });
  await app.listen(7701); // TODO: unhardcode
}
bootstrap();
