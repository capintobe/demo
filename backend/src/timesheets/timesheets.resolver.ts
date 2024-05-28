// src/timesheets/timesheets.resolver.ts
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
}