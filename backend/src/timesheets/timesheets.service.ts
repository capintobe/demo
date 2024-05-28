import { Injectable } from '@nestjs/common';
import { CreateTimesheetInput } from './dto/create-timesheet.input';
import { UpdateTimesheetInput } from './dto/update-timesheet.input';

@Injectable()
export class TimesheetsService {
  create(createTimesheetInput: CreateTimesheetInput) {
    return 'This action adds a new timesheet';
  }

  findAll() {
    return `This action returns all timesheets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timesheet`;
  }

  update(id: number, updateTimesheetInput: UpdateTimesheetInput) {
    return `This action updates a #${id} timesheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} timesheet`;
  }
}
