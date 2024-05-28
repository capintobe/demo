import { Module } from '@nestjs/common';
import { TimesheetsService } from './timesheets.service';
import { TimesheetsResolver } from './timesheets.resolver';

@Module({
  providers: [TimesheetsResolver, TimesheetsService],
})
export class TimesheetsModule {}
