import { AuthorModule } from './author.module';
import { PostModule } from './post.module';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';


@Module({
  imports: [PostModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
