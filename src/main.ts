import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  //set up the server
  const app = await NestFactory.create(AppModule);

  //set up swagger docs
  const config = new DocumentBuilder()
    .setTitle('NestJs Docker Server')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //server is leasing on port 3000
  await app.listen(3000, async () => {
    console.log(`server is running on :${await app.getUrl()}`);
  });
}
bootstrap();
