import { ApiProperty } from '@nestjs/swagger';
import { Todo } from '@prisma/client';

export class TodoEntity implements Todo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  completed: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
