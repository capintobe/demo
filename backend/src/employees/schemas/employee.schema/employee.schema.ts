import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role, RoleSchema } from '../role-schema';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: String, ref: 'Company' }] })
  companies: string[];

  @Prop({ type: [RoleSchema], required: true })
  roles: Role[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);