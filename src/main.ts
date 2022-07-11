import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DBService } from './db.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Books API')
  .setDescription('The Books API description')
  .setVersion('0.1')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  const dbService: DBService = app.get(DBService);
  dbService.enableShutdownHooks(app)
  await app.listen(3000);
}
bootstrap();