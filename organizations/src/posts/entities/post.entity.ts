import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class Post {
  @ObjectIdColumn({ name: '_id' })
  _id: ObjectId;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  isPublished: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;
}
