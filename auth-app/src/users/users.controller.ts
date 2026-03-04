/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

   constructor(private readonly userService:UsersService){}

   @Get()
   findALl(){
      return this.userService.findAll();
   }

   @Get(':id')
   findOne(@Param(':id') id:string){
      return this.userService.findById(id);
   }

   @Delete(':id')
   remove(@Param('id') id:string){
      return this.userService.remove(id);
   }

}
