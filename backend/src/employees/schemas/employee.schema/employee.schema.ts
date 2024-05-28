// src/employees/schemas/employee.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role, RoleSchema } from '../role-schema';
import { Company } from '../../../company/schemas/company.schema/company.schema';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Company' }] })
  companies: Company[];

  @Prop({ type: [RoleSchema], required: true })
  roles: Role[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
