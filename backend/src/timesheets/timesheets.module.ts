import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimesheetsService } from './timesheets.service';
import { TimesheetsResolver } from './timesheets.resolver';
import { Timesheet, TimesheetSchema } from './schemas/timesheet.schema/timesheet.schema';
import { EmployeesModule } from '../employees/employees.module';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Timesheet.name, schema: TimesheetSchema }]),
    EmployeesModule,
    CompanyModule,
  ],
  providers: [TimesheetsService, TimesheetsResolver],
})
export class TimesheetsModule {}
