import { Controller, Get } from '@nestjs/common';
import { ExcerptsService } from '../excerpts.service';

@Controller('excerpts')
export class ExcerptsController {
  constructor(private readonly excerptsService: ExcerptsService) {}

  @Get()
  findMany() {
    return this.excerptsService.findMany();
  }
}
