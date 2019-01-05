import 'reflect-metadata';
import { AuthorModule } from './modules/author.module';
import { PostModule } from './modules/post.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from './modules/app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
                  .setTitle('Simple Blog API')
                  .setDescription("Simple NodeJS and Nest API for blog")
                  .addTag('Posts')
                  .addTag('Authors')
                  .build()
  const apiDocument = SwaggerModule.createDocument(app, options, { include: [PostModule, AuthorModule]})
  SwaggerModule.setup('docs/public', app, apiDocument);


  await app.listen(3008);



  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close())
  }

}
bootstrap();
