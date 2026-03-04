/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import *as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
   private userService:UsersService,
   private jwtService:JwtService
  ){}

  async validateUser(email:string,pass:string){
  
   const user=await this.userService.findByEmail(email);
   if(!user) throw new UnauthorizedException();
   
   const isMatch=await bcrypt.compare(pass,user.password);
   if(!isMatch) throw new UnauthorizedException();

   return user;
  }

  async login(email:string,password:string){
   
   const user =await this.validateUser(email,password);
   const payload={
      sub:user._id,
      email:user.email
   }

   return {access_token:this.jwtService.sign(payload)};
  }
}
