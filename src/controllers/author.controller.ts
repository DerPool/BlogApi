import { ApiUseTags, ApiImplicitParam, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Author } from './../entities/author.entitiy';
import { AuthorService } from './../services/author.service';
import { Controller, Get, Req, Param, Delete, Put, Body, Post } from '@nestjs/common';


@ApiUseTags("Authors")
@Controller("author")
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    @Get()
    @ApiResponse({ status: 200, description: `
    {
    items: [
        {
            id: 1,
            login: "Test",
            reg_date: 123123 
        },
        {
            id: 2,
            login: "Test2",
            reg_date: 1234
        }
    ]
    }
    `})
    @ApiOperation({ title: 'Returns all authors' })
    async findAll(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    @Get(":id")
    @ApiImplicitParam({name:"id", required:true, type: String})
    @ApiResponse({ status: 200, description: `
    Success
    {
        id: 1,
        login: "Test",
        reg_date: 123123 
    }
    `})
    @ApiOperation({ title: 'Returns an author by given ID' })
    async findOne(@Param() params): Promise<Author> {
        return this.authorService.findOne(params.id);
    }

    @Post()
    @ApiOperation({ title: 'Creates a new Author' })
    async create(@Body() author: Author): Promise<Author> {
        return this.authorService.create(author);
    }

}