import { Schema } from 'mongoose';

export const TimesheetSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  hoursWorked: { type: Number, required: true },
  role: { type: String, required: true }, // Role title to identify which role the timesheet is for
});