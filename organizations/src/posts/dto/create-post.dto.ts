// /nest-todo-app/src/todo/dto/create-todo.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'Please input title',
    required: true,
  })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    example: 'Please input text',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(10)
  readonly content: string;
}
