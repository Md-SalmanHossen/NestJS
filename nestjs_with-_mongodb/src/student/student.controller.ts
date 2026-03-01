/* eslint-disable prettier/prettier */
import { Body, Controller, Post,Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
   constructor(private readonly studentService:StudentService){}

   @Post()
   async addStudent(@Body() data:Partial<Student>){
      return this.studentService.createStudent(data);
   }
   
   @Get()
   async getStudent(){
      return this.studentService.getAllStudent();
   }

   @Get(':id')
   async getStudentById(@Param('id') id:string){
      return this.studentService.getStudentById(id);
   }

}
