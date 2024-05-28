import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaySlipsService } from './pay-slips.service';
import { PaySlip } from './entities/pay-slip.entity';
import { CreatePaySlipInput } from './dto/create-pay-slip.input';
import { UpdatePaySlipInput } from './dto/update-pay-slip.input';

@Resolver(() => PaySlip)
export class PaySlipsResolver {
  constructor(private readonly paySlipsService: PaySlipsService) {}

  @Mutation(() => PaySlip)
  createPaySlip(@Args('createPaySlipInput') createPaySlipInput: CreatePaySlipInput) {
    return this.paySlipsService.create(createPaySlipInput);
  }

  @Query(() => [PaySlip], { name: 'paySlips' })
  findAll() {
    return this.paySlipsService.findAll();
  }

  @Query(() => PaySlip, { name: 'paySlip' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paySlipsService.findOne(id);
  }

  @Mutation(() => PaySlip)
  updatePaySlip(@Args('updatePaySlipInput') updatePaySlipInput: UpdatePaySlipInput) {
    return this.paySlipsService.update(updatePaySlipInput.id, updatePaySlipInput);
  }

  @Mutation(() => PaySlip)
  removePaySlip(@Args('id', { type: () => Int }) id: number) {
    return this.paySlipsService.remove(id);
  }
}
