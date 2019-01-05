import { ApiModelProperty } from "@nestjs/swagger";

export class Author {
    constructor(options: any) {
        this.id = options.id;
        this.login = options.login;
        this.reg_date = options.reg_date;
    }

    readonly id: number;

    @ApiModelProperty()
    readonly login: string;

    readonly reg_date: Date;

    get getLogin(): String {
        return this.login;
    }
}