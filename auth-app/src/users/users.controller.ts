/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/jwt.gurd';

@Controller('users')
export class UsersController {

   constructor(private readonly userService:UsersService){}

   @UseGuards(JwtGuard)
   @Get()
   findALl(){
      return this.userService.findAll();
   }

   @UseGuards(JwtGuard)
   @Get(':id')
   findOne(@Param(':id') id:string){
      return this.userService.findById(id);
   }

   @UseGuards(JwtGuard)
   @Put('id')
   update(@Param('id') id:string,@Body() body:any){
      return this.userService.update(id,body);
   }

   @UseGuards(JwtGuard)
   @Delete(':id')
   remove(@Param('id') id:string){
      return this.userService.remove(id);
   }

}
