import { CreateLeaveRequestInput } from './create-leave-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLeaveRequestInput extends PartialType(CreateLeaveRequestInput) {
  @Field(() => Int)
  id: number;
}
