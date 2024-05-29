import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateTimesheetInput } from './create-timesheet.input';

@InputType()
export class UpdateTimesheetInput extends PartialType(CreateTimesheetInput) {
  @Field()
  id: string;
}
