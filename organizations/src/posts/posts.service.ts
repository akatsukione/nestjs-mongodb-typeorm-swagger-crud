import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(post: CreatePostDto): Promise<Post> {
    return await this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findOne(id: ObjectId): Promise<Post | null> {
    const object = await this.postRepository.findOneBy({ _id: id });
    console.log(object);
    return object;
    // return id;
  }

  async update(
    id: ObjectId,
    updatePostDto: UpdatePostDto,
  ): Promise<Post | null> {
    await this.postRepository.update(id, updatePostDto);
    return this.postRepository.findOneBy({ _id: id });
  }

  async remove(id: ObjectId): Promise<Post[]> {
    const postToRemove = await this.postRepository.find({ where: { _id: id } });
    if (!postToRemove) {
      throw new Error('Post new Error');
    }
    return await this.postRepository.remove(postToRemove);
  }
}
