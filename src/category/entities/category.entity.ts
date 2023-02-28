import { Timestamp } from "src/Generic/timestamp.entity";
import { PostEntity } from "src/post/entity/post.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class CategoryEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @Column({
        // default: "format_name(name)"
    })
    slug: string;

    @ManyToMany(() => PostEntity, post => post.categories)
    posts: PostEntity[];

    // format_name(name: string) {
    //     return name.replace(/\s+/g, '-').toLowerCase();
    // }
}