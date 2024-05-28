import { CreatePaySlipInput } from './create-pay-slip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePaySlipInput extends PartialType(CreatePaySlipInput) {
  @Field(() => Int)
  id: number;
}
