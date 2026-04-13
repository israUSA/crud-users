import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@src/prisma/prisma.service';
import { CreateUserWithPostDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; email: string }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findAll():Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: { name?: string; email?: string }): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id:number): Promise<User> {
    return this.prisma.user.delete({where: {id}});

  }

  //transacciones avanzadas

  async createWithPost(data: CreateUserWithPostDto){
    return this.prisma.$transaction(async (tx) =>{
        
        const user = await tx.user.create({
          data: {
            name: data.name,
            email: data.email,
          },
        });

        const post = await tx.post.create({
          data: {
            title: data.initialPost.title,
            content: data.initialPost.content,
            userId: user.id, // Conexión manual por ID
          },
        });     
        return {user, post};
    })

  }


}
