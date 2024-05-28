import { Module } from '@nestjs/common';
import { LeaveRequestsService } from './leave-requests.service';
import { LeaveRequestsResolver } from './leave-requests.resolver';

@Module({
  providers: [LeaveRequestsResolver, LeaveRequestsService],
})
export class LeaveRequestsModule {}
