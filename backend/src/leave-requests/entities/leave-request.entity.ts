import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LeaveRequest {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
