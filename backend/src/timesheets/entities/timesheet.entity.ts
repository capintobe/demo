import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Employee } from '../../employees/entities/employee.entity';
import { Company } from '../../company/entities/company.entity';

@ObjectType()
export class Timesheet {
  @Field(() => ID)
  id: string;

  @Field(() => Employee)
  employee: Employee;

  @Field(() => Company)
  company: Company;

  @Field()
  role: string;

  @Field()
  date: Date;

  @Field()
  hoursWorked: number;
}
