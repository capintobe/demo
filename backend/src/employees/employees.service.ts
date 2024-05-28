import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schemas/employee.schema/employee.schema';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { CompanyService } from '../company/company.service';
import { ObjectId } from 'mongodb';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    private readonly companiesService: CompanyService
  ) {}

  async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeInput);
    const savedEmployee = await createdEmployee.save();

    const companyIds = createEmployeeInput.companies.map(id => new ObjectId(id));
    const companies = await this.companiesService.findByIds(companyIds);

    if (companies.length !== companyIds.length) {
      throw new NotFoundException('One or more companies not found');
    }

    for (const company of companies) {
      company.employees.push(savedEmployee._id as unknown as string);
      await company.save();
    }

    savedEmployee.companies = companies;
    return savedEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate('companies').exec();
  }

  async findOne(id: string): Promise<Employee> {
    return this.employeeModel.findById(id).populate('companies').exec();
  }

  async update(id: string, updateEmployeeInput: UpdateEmployeeInput): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(id, updateEmployeeInput, { new: true }).exec();
  }

  async remove(id: string): Promise<Employee> {
    return this.employeeModel.findByIdAndDelete(id).exec();
  }
}
