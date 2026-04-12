import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() body: {name: string; email:string}) {
        return this.usersService.create(body);
    }

    @Get()
    getUsers(){
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.usersService.findOne(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: {name: string, email:string}){
        return this.usersService.update(Number(id), body);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.usersService.remove(Number(id));
    }


}