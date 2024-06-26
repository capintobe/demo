import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: String, ref: 'Employee' }] })
  employees: string[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);