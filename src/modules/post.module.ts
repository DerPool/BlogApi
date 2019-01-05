import { PostService } from './../services/post.service';
import { PostController } from './../controllers/post.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [PostController],
    providers: [PostService]
})
export class PostModule {}