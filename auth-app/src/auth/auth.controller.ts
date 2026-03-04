/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
   constructor(
      private userService:UsersService,
      private authService:AuthService
   ){}

   @Post('register')
   register(@Body() dto:CreateUserDto){
      return this.userService.create(dto);
   }

   @Post('login')
   login(@Body() dto:LoginDto){
      return this.authService.login(dto.email,dto.password);
   }
}
