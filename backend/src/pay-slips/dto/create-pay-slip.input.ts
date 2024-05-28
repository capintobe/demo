import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaySlipInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
