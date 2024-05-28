// src/timesheets/timesheets.module.ts
import { Module } from '@nestjs/common';
import { TimesheetsService } from './timesheets.service';
import { TimesheetsResolver } from './timesheets.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Timesheet, TimesheetSchema } from './schemas/timesheet.schema/timesheet.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Timesheet.name, schema: TimesheetSchema }])],
  providers: [TimesheetsService, TimesheetsResolver],
})
export class TimesheetsModule {}