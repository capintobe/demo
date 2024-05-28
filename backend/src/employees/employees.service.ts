// src/employees/employees.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schemas/employee.schema/employee.schema';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { CompanyService } from '../company/company.service';
import { CompanyDocument } from '../company/schemas/company.schema/company.schema';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    private readonly companiesService: CompanyService
  ) {}

  async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeInput);
    const savedEmployee = await createdEmployee.save();
    for (const companyId of createEmployeeInput.companies) {
      const company: CompanyDocument = await this.companiesService.findOne(companyId);
      company.employees.push(savedEmployee.id);
      await company.save();
    }
    return savedEmployee;
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(id: string): Promise<Employee> {
    return this.employeeModel.findById(id).exec();
  }

  async update(id: string, updateEmployeeInput: UpdateEmployeeInput): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(id, updateEmployeeInput, { new: true }).exec();
  }

  async remove(id: string): Promise<Employee> {
    return this.employeeModel.findByIdAndDelete(id).exec();
  }
}