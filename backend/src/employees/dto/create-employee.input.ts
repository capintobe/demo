import { InputType, Field } from '@nestjs/graphql';
import { RoleInput } from './role.input';

@InputType()
export class CreateEmployeeInput {
  @Field()
  name: string;

  @Field(() => [String])
  companies: string[];

  @Field(() => [RoleInput])
  roles: RoleInput[];
}