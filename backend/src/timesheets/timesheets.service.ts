// src/timesheets/timesheets.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timesheet, TimesheetDocument } from './schemas/timesheet.schema/timesheet.schema';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';
import { EmployeesService } from '../employees/employees.service';
import { CompanyService } from '../company/company.service';

@Injectable()
export class TimesheetsService {
  constructor(
    @InjectModel(Timesheet.name) private timesheetModel: Model<TimesheetDocument>,
    private readonly employeesService: EmployeesService,
    private readonly companiesService: CompanyService
  ) {}

  async create(createTimesheetInput: CreateTimesheetInput): Promise<Timesheet> {
    const employee = await this.employeesService.findOne(createTimesheetInput.employeeId);
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${createTimesheetInput.employeeId} not found`);
    }

    const company = await this.companiesService.findOne(createTimesheetInput.companyId);
    if (!company) {
      throw new NotFoundException(`Company with ID ${createTimesheetInput.companyId} not found`);
    }

    const createdTimesheet = new this.timesheetModel({
      ...createTimesheetInput,
      employee,
      company,
    });
    return createdTimesheet.save();
  }

  async findAll(): Promise<Timesheet[]> {
    return this.timesheetModel.find().populate('employee').populate('company').exec();
  }

  async findOne(id: string): Promise<Timesheet> {
    return this.timesheetModel.findById(id).populate('employee').populate('company').exec();
  }

  async update(id: string, updateTimesheetInput: UpdateTimesheetInput): Promise<Timesheet> {
    return await this.timesheetModel.findByIdAndUpdate(id, updateTimesheetInput, { new: true }).exec();
  }

  async remove(id: string): Promise<Timesheet> {
    return this.timesheetModel.findByIdAndDelete(id).exec();
  }
}
