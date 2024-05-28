import { Schema } from 'mongoose';

export const LeaveRequestSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  type: { type: String, required: true }, // Type of leave (e.g., annual, sick)
  status: { type: String, required: true }, // Status of the leave request
  role: { type: String, required: true }, // Role title to identify which role the leave request is for
});