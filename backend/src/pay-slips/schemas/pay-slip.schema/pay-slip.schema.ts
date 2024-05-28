import { Schema } from 'mongoose';

export const PaySlipSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  periodStart: { type: Date, required: true },
  periodEnd: { type: Date, required: true },
  grossEarnings: { type: Number, required: true },
  taxes: { type: Number, required: true },
  netPay: { type: Number, required: true },
  role: { type: String, required: true }, // Role title to identify which role the pay slip is for
});