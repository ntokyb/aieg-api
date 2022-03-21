import { Test, TestingModule } from '@nestjs/testing';
import { MolecularpathologylabsController } from './molecularpathologylabs.controller';

describe('MolecularpathologylabsController', () => {
  let controller: MolecularpathologylabsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MolecularpathologylabsController],
    }).compile();

    controller = module.get<MolecularpathologylabsController>(MolecularpathologylabsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
