import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TimesheetsService } from './timesheets.service';
import { Timesheet } from './entities/timesheet.entity';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';

@Resolver(() => Timesheet)
export class TimesheetsResolver {
  constructor(private readonly timesheetsService: TimesheetsService) {}

  @Mutation(() => Timesheet)
  createTimesheet(@Args('createTimesheetInput') createTimesheetInput: CreateTimesheetInput) {
    return this.timesheetsService.create(createTimesheetInput);
  }

  @Query(() => [Timesheet], { name: 'timesheets' })
  findAll() {
    return this.timesheetsService.findAll();
  }

  @Query(() => Timesheet, { name: 'timesheet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.timesheetsService.findOne(id);
  }

  @Mutation(() => Timesheet)
  updateTimesheet(@Args('updateTimesheetInput') updateTimesheetInput: UpdateTimesheetInput) {
    return this.timesheetsService.update(updateTimesheetInput.id, updateTimesheetInput);
  }

  @Mutation(() => Timesheet)
  removeTimesheet(@Args('id', { type: () => Int }) id: number) {
    return this.timesheetsService.remove(id);
  }
}
