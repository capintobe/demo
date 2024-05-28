// src/companies/companies.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companiesService: CompanyService) {}

  @Query(() => [Company])
  async companies() {
    return this.companiesService.findAll();
  }

  @Mutation(() => Company)
  async createCompany(@Args('createCompanyInput') createCompanyInput: CreateCompanyInput) {
    return this.companiesService.create(createCompanyInput);
  }
}