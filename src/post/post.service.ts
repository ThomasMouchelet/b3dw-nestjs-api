import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostCreateDto } from './entity/post-create.dto';
import { PostUpdateDto } from './entity/post-update.dto';
import { PostEntity } from './entity/post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>
    ) {}

    async getAllPosts() {
        return await this.postRepository.find();
    }
    async getOnePostById(id: number) {
        return await this.postRepository.findOneBy({ id });
    }
    async createPost(data: PostCreateDto) {
        try {
            return await this.postRepository.save(data);
        } catch (error) {
            throw new Error('Error while creating post');
        }
    }
    async updatePost(id: number, data: PostUpdateDto) {
        const post = await this.postRepository.findOneBy({ id });
        const postUpdate = { ...post, ...data };
        await this.postRepository.save(postUpdate);

        return postUpdate;
    }
    async softDeletePost(id: number) {
        return await this.postRepository.softDelete(id);
    }
}
