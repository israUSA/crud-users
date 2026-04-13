import { IsEmail, IsObject, IsString, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreatePostDto } from "./create_post.dto";


export class CreateUserWithPostDto{
 @IsString()
 @MinLength(3)
 name!: string;   

 @IsEmail({}, {message: 'El Correo no es valido, avispate pues ñaño'})
 email!: string;

 @IsObject()
 @ValidateNested()
 @Type(() => CreatePostDto)
  initialPost!: CreatePostDto;

 
}