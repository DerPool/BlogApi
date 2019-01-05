import { PostService } from './../services/post.service';
import { Controller, Get, Req, Param, Post as Post_action ,Delete, Put, Body } from '@nestjs/common';
import { Post } from "../entities/post.entity"
import { ApiUseTags, ApiOperation, ApiImplicitParam, ApiResponse } from '@nestjs/swagger';


@ApiUseTags("Posts")
@Controller("post")
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    @ApiOperation({ title: 'Returns all Posts' })
    async findAll(@Req() request): Promise<any[]> {
        return this.postService.findAll();
    }

    @Get(":id")
    @ApiOperation({ title: 'Returns Post by given ID' })
    @ApiImplicitParam({name:"id", required:true, type: String})
    async findOne(@Param() params): Promise<Post> {
        return this.postService.findOne(params.id);
    }

    @Post_action()
    @ApiOperation({ title: 'Creates a new Post' })
    async createPost(@Body() post: Post): Promise<Post> {
        return this.postService.createPost(post)
    }

    @Put(':id')
    @ApiOperation({ title: 'Update a Post with given ID' })
    @ApiImplicitParam({name:"id", required:true, type: String})
    @ApiResponse({status: 200})
    async updatePost(@Param() params, @Body() post: Post): Promise<Post> {
        return this.postService.updatePost(params.id, post);
    }


}