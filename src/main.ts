import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  //set up the server
  const app = await NestFactory.create(AppModule);

  //set up swagger docs
  const config = new DocumentBuilder()
    .setTitle('NestJs Docker Server')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document);

  //server is leasing on port 3000
  await app.listen(3000, async () => { 
    console.log(`server is running on :${ await app.getUrl()}`)
  });
}
bootstrap();

