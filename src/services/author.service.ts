import { Author } from './../entities/author.entitiy';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthorService {
    private readonly authors: Author[] = [
        new Author({id: 1, login: "Patric Gazey", reg_date: new Date()}),
        new Author({id: 2, login: "Vlad Valov", reg_date: new Date()}),
        new Author({id: 3, login: "Derek Rosby", reg_date: new Date()})


    ]

    create(author: Author): Author {
        const latest_id: number = this.authors.slice(-1)[0].id;
        const new_author: Author = new Author({id: latest_id + 1, title: author.login,  reg_date: new Date()});
        this.authors.push(new_author);
        return new_author
    }

    findAll(): Author[] {
        return this.authors;
    }

    findOne(id: Number): Author {
        const result = this.authors.filter((post: Author) => post.id == id)
        if (result.length > 0) {
            return result[0]
        }
        return <Author>{}
    }

}