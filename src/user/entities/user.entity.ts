import { CommentEntity } from "src/comment/entities/comment.entity";
import { PostEntity } from "src/post/entity/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        // select: false,
    })
    password: string;
    @Column({
        unique: true,
    })
    email: string;
    @Column({
        nullable: true
    })
    firstName: string;
    @Column({
        nullable: true
    })
    lastName: string;

    @OneToMany(() => PostEntity, post => post.author)
    posts: PostEntity[];

    @OneToMany(() => CommentEntity, comment => comment.author)
    comments: CommentEntity[];
}
