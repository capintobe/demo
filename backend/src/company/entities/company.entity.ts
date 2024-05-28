import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Employee } from '../../employees/entities/employee.entity';

@ObjectType()
export class Company {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Employee])
  employees: Employee[];
}