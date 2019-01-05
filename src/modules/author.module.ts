import { AuthorService } from './../services/author.service';
import { AuthorController } from './../controllers/author.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [AuthorController],
    providers: [AuthorService]
})
export class AuthorModule {}