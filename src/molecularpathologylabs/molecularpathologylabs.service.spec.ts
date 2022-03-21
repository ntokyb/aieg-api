import { Test, TestingModule } from '@nestjs/testing';
import { MolecularpathologylabsService } from './molecularpathologylabs.service';

describe('MolecularpathologylabsService', () => {
  let service: MolecularpathologylabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MolecularpathologylabsService],
    }).compile();

    service = module.get<MolecularpathologylabsService>(MolecularpathologylabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
