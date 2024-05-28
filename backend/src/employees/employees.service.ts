// src/employees/employees.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schemas/employee.schema/employee.schema';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

  create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeInput);
    return createdEmployee.save();
  }

  findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  findOne(id: string): Promise<Employee> {
    return this.employeeModel.findById(id).exec();
  }

  update(id: string, updateEmployeeInput: UpdateEmployeeInput): Promise<Employee> {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeInput, { new: true }).exec();
  }

    remove(id: string): Promise<Employee> {
    return this.employeeModel.findByIdAndDelete(id).exec();
  }
}