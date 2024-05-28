import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LeaveRequestsService } from './leave-requests.service';
import { LeaveRequest } from './entities/leave-request.entity';
import { CreateLeaveRequestInput } from './dto/create-leave-request.input';
import { UpdateLeaveRequestInput } from './dto/update-leave-request.input';

@Resolver(() => LeaveRequest)
export class LeaveRequestsResolver {
  constructor(private readonly leaveRequestsService: LeaveRequestsService) {}

  @Mutation(() => LeaveRequest)
  createLeaveRequest(@Args('createLeaveRequestInput') createLeaveRequestInput: CreateLeaveRequestInput) {
    return this.leaveRequestsService.create(createLeaveRequestInput);
  }

  @Query(() => [LeaveRequest], { name: 'leaveRequests' })
  findAll() {
    return this.leaveRequestsService.findAll();
  }

  @Query(() => LeaveRequest, { name: 'leaveRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.leaveRequestsService.findOne(id);
  }

  @Mutation(() => LeaveRequest)
  updateLeaveRequest(@Args('updateLeaveRequestInput') updateLeaveRequestInput: UpdateLeaveRequestInput) {
    return this.leaveRequestsService.update(updateLeaveRequestInput.id, updateLeaveRequestInput);
  }

  @Mutation(() => LeaveRequest)
  removeLeaveRequest(@Args('id', { type: () => Int }) id: number) {
    return this.leaveRequestsService.remove(id);
  }
}
