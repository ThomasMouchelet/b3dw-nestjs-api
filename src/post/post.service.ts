import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    getAllPosts() {
        return 'All Posts';
    }
    getOnePostById(id: number) {
        return `Post by id : ${id}`;
    }
    createPost(data: any) {
        return 'Create Post';
    }
    updatePost(id: number, data: any) {
        return 'Update Post';
    }
    softDeletePost(id: number) {
        return 'Delete Post';
    }
}
