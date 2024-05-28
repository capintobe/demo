import { Injectable } from '@nestjs/common';
import { CreatePaySlipInput } from './dto/create-pay-slip.input';
import { UpdatePaySlipInput } from './dto/update-pay-slip.input';

@Injectable()
export class PaySlipsService {
  create(createPaySlipInput: CreatePaySlipInput) {
    return 'This action adds a new paySlip';
  }

  findAll() {
    return `This action returns all paySlips`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paySlip`;
  }

  update(id: number, updatePaySlipInput: UpdatePaySlipInput) {
    return `This action updates a #${id} paySlip`;
  }

  remove(id: number) {
    return `This action removes a #${id} paySlip`;
  }
}
