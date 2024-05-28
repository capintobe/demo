// src/pay-slips/entities/pay-slip.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PaySlip {
  @Field(() => ID)
  id: string;

  @Field()
  periodStart: Date;

  @Field()
  periodEnd: Date;

  @Field()
  grossEarnings: number;

  @Field()
  taxes: number;

  @Field()
  netPay: number;

  @Field()
  role: string;
}