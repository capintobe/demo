// src/employees/employees.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Query(() => [Employee])
  async employees() {
    return this.employeesService.findAll();
  }

  @Mutation(() => Employee)
  async createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput) {
    return this.employeesService.create(createEmployeeInput);
  }

  @Mutation(() => Employee)
  async updateEmployee(@Args('id') id: string, @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput) {
    return this.employeesService.update(id, updateEmployeeInput);
  }

  @Mutation(() => Employee)
  async removeEmployee(@Args('id') id: string) {
    return this.employeesService.remove(id);
  }
}