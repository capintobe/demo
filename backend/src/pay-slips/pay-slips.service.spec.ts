import { Test, TestingModule } from '@nestjs/testing';
import { PaySlipsService } from './pay-slips.service';

describe('PaySlipsService', () => {
  let service: PaySlipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaySlipsService],
    }).compile();

    service = module.get<PaySlipsService>(PaySlipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
