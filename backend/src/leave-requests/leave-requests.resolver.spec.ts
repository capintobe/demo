import { Test, TestingModule } from '@nestjs/testing';
import { LeaveRequestsResolver } from './leave-requests.resolver';
import { LeaveRequestsService } from './leave-requests.service';

describe('LeaveRequestsResolver', () => {
  let resolver: LeaveRequestsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaveRequestsResolver, LeaveRequestsService],
    }).compile();

    resolver = module.get<LeaveRequestsResolver>(LeaveRequestsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
