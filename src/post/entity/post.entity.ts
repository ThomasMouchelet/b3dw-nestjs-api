import { CategoryEntity } from "src/category/entities/category.entity";
import { CommentEntity } from "src/comment/entities/comment.entity";
import { Timestamp } from "src/Generic/timestamp.entity";
import { UploadFileEntity } from "src/upload-file/entities/upload-file.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("post")
export class PostEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        nullable: false,
        unique: true,
    })
    title: string;

    @Column({
        nullable: true,
    })
    description: string;

    @Column({
        default: false,
    })
    published: boolean;

    @ManyToMany(() => CategoryEntity, category => category.posts, {
        cascade: ['insert'],
    })
    @JoinTable()
    categories: CategoryEntity[];

    @OneToMany(() => CommentEntity, comment => comment.post, )
    comments: CommentEntity[];

    @ManyToOne(() => UserEntity, user => user.posts)
    author: UserEntity;

    @OneToOne(() => UploadFileEntity, uploadFile => uploadFile.post)
    @JoinColumn()
    uploadFile: UploadFileEntity;
}