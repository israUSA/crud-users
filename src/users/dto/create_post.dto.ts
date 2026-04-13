import { IsString, MinLength } from "class-validator";

export class CreatePostDto{
    @IsString()
    @MinLength(5)
    title!: string;

    @IsString()
    content!: string;
}