/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashed = await bcrypt.hash(createUserDto.password, 10);
    
    const user=new this.userModel({
      ...CreateUserDto,
      password:hashed
    })

    return user.save();
  }

  async findAll() {
    return this.userModel.find().select('-password');
  }

  async findByEmail(email:string) {
    return this.userModel.findOne({ email });
  }

  async findById(id: string) {
    return this.userModel.findById(id).select('-password');
  }

  async update(id:string, dto:Partial<CreateUserDto>){
    return this.userModel.findByIdAndUpdate(id,dto,{new:true})
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
