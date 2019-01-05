import { ApiModelProperty } from "@nestjs/swagger";

export interface PostDTO {
    id?: Number,
    title?: String,
    text?: String,
    dateOfCreate?: Date
}