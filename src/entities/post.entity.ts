import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';


export class Post {
    constructor(options: any) {
        this.id = options.id;
        this.title = options.title;
        this.dateOfCreate = options.dateOfCreate;
        this.author = options.author;
    }
    readonly id: number;

    @ApiModelProperty()
    readonly title: string;

    @ApiModelProperty()
    readonly text: string;

    readonly dateOfCreate: Date;

    private author_id: String;

    @ApiModelProperty()
    get author(): String {
        return `/author/${this.author_id}`;
    }

    set author(id: String) {
        this.author_id = id;
    }


}