import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MolecularpathologylabsController } from './molecularpathologylabs.controller';
import { MolecularPathologyLabs } from './molecularpathologylabs.entity';
import { MolecularPathologylabsService } from './molecularpathologylabs.service';

@Module({
  imports: [TypeOrmModule.forFeature([MolecularPathologyLabs])],
  controllers: [MolecularpathologylabsController],
  providers: [MolecularPathologylabsService],
})
export class MolecularpathologylabsModule {}
