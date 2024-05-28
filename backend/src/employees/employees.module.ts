// src/employees/employees.module.ts
import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema/employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])],
  providers: [EmployeesService, EmployeesResolver],
})
export class EmployeesModule {}