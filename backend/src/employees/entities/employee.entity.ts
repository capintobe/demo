
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Role } from './role.entity';
import { Company } from '../../company/entities/company.entity';

@ObjectType()
export class Employee {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Company])
  companies: Company[];

  @Field(() => [Role])
  roles: Role[];
}