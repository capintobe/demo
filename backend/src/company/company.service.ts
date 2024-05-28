// src/companies/companies.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './schemas/company.schema/company.schema';
import { CreateCompanyInput } from './dto/create-company.input';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}

  create(createCompanyInput: CreateCompanyInput): Promise<Company> {
    const createdCompany = new this.companyModel(createCompanyInput);
    return createdCompany.save();
  }

  findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  findOne(id: string): Promise<CompanyDocument> {
    return this.companyModel.findById(id).exec();
  }

  update(id: string, updateCompanyInput: CreateCompanyInput): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(id, updateCompanyInput, { new: true }).exec();
  }

  remove(id: string): Promise<Company> {
    return this.companyModel.findByIdAndDelete(id).exec();
  }
}