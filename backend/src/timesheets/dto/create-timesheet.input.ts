import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTimesheetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
