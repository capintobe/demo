import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PaySlip {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
