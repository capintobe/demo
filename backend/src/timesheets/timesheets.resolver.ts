import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TimesheetsService } from './timesheets.service';
import { Timesheet } from './entities/timesheet.entity';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';

@Resolver(() => Timesheet)
export class TimesheetsResolver {
  constructor(private readonly timesheetsService: TimesheetsService) {}

  @Query(() => [Timesheet])
  async timesheets() {
    return this.timesheetsService.findAll();
  }

  @Mutation(() => Timesheet)
  async createTimesheet(@Args('createTimesheetInput') createTimesheetInput: CreateTimesheetInput) {
    return this.timesheetsService.create(createTimesheetInput);
  }

  @Mutation(() => Timesheet)
  async updateTimesheet(@Args('id') id: string, @Args('updateTimesheetInput') updateTimesheetInput: UpdateTimesheetInput) {
    return this.timesheetsService.update(id, updateTimesheetInput);
  }

  @Mutation(() => Timesheet)
  async removeTimesheet(@Args('id') id: string) {
    return this.timesheetsService.remove(id);
  }

  @Query(() => Timesheet)
  async timesheet(@Args('id') id: string) {
    return this.timesheetsService.findOne(id);
  }
}
