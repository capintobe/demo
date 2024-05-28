// src/employees/dto/create-employee.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { RoleInput } from './role.input';

@InputType()
export class CreateEmployeeInput {
  @Field()
  name: string;

  @Field(() => [RoleInput])
  roles: RoleInput[];
}