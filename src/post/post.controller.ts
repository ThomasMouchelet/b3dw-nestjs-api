import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    getAllPosts() {
        return this.postService.getAllPosts()
    }
    @Get(':id')
    getOnePostById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.postService.getOnePostById(id);
    }
    @Post()
    createPost(
        @Body() data: any,
    ) {
        return this.postService.createPost(data);
    }
    @Put(':id')
    updatePost(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: any
    ) {
        return this.postService.updatePost(id, data);
    }
    @Delete(':id')
    softDeletePost(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.postService.softDeletePost(id);
    }
}
