import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve todo la data que no esta puesta en el dto
      forbidNonWhitelisted: true, // Lanza error si mandan información que no es solicitada
    }),
  );

  await app.listen(3000);
}
bootstrap();
