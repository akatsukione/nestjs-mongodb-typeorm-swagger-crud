import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'app',
      synchronize: true,
      entities: [Post],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
