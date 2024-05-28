import { Module } from '@nestjs/common';
import { PaySlipsService } from './pay-slips.service';
import { PaySlipsResolver } from './pay-slips.resolver';

@Module({
  providers: [PaySlipsResolver, PaySlipsService],
})
export class PaySlipsModule {}
