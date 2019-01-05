import { Injectable } from "@nestjs/common";
import { Post } from '../entities/post.entity'

@Injectable()
export class PostService {
    private readonly posts: Post[] = [new Post({id: 1, title: "Post 1", text: "Text for Post 1", dateOfCreate: new Date(), author: '1'}) ];

    findAll(): any[] {
        let posts = this.posts;
        let post_list = [];
        for(let post of posts) {
            post_list.push({id: post.id, title: post.title, text: post.text, dateOfCreate: post.dateOfCreate, author: post.author})
        }
        return post_list;
    }

    findOne(id: Number): any {
        const result = this.posts.filter((post: Post) => post.id == id)
        if (result.length > 0) {
            return {id:result[0].id, title: result[0].title, text: result[0].text, dateOfCreate: result[0].dateOfCreate, author: result[0].author}
        }
        return new Post({})
    }

    createPost(post: Post): Post {
        const latest_id: number = this.posts.slice(-1)[0].id;
        const new_post: Post = new Post({id: latest_id + 1, title: post.title, text: post.text, dateOfCreate: new Date(), author: post.author});
        this.posts.push(new_post);
        return new_post
    }

    updatePost(id: Number, post: Post): Post {
        for(let a of this.posts) {
            if(a.id == id) {
                Object.keys(post).forEach((key) => {
                    try {
                        a[key] = post[key] 
                    } catch(e) {
                        console.log(e)
                    }
                })
            }
            return a;
        }
        return new Post({});
    }

}