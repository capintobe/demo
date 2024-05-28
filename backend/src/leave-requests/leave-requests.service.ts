import { Injectable } from '@nestjs/common';
import { CreateLeaveRequestInput } from './dto/create-leave-request.input';
import { UpdateLeaveRequestInput } from './dto/update-leave-request.input';

@Injectable()
export class LeaveRequestsService {
  create(createLeaveRequestInput: CreateLeaveRequestInput) {
    return 'This action adds a new leaveRequest';
  }

  findAll() {
    return `This action returns all leaveRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leaveRequest`;
  }

  update(id: number, updateLeaveRequestInput: UpdateLeaveRequestInput) {
    return `This action updates a #${id} leaveRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaveRequest`;
  }
}
