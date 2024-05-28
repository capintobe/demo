import { Test, TestingModule } from '@nestjs/testing';
import { PaySlipsResolver } from './pay-slips.resolver';
import { PaySlipsService } from './pay-slips.service';

describe('PaySlipsResolver', () => {
  let resolver: PaySlipsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaySlipsResolver, PaySlipsService],
    }).compile();

    resolver = module.get<PaySlipsResolver>(PaySlipsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
