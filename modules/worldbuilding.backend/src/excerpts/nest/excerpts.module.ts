import { Module } from '@nestjs/common';
import { ExcerptsService } from '../excerpts.service';
import { ExcerptsController } from './excerpts.controller';

@Module({
  controllers: [ExcerptsController],
  providers: [ExcerptsService],
})
export class ExcerptsModule {}
