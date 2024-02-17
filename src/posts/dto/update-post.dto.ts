import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    example: 'Please input title',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Please input content',
  })
  readonly content: string;
  readonly updatedAt: Date;
  readonly createdAt: Date;
}
