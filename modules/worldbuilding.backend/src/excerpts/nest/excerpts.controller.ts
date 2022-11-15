import { Controller, Get } from '@nestjs/common';
import { ExcerptsService } from '../excerpts.service';

@Controller('worldbuilding/excerpts') // TODO: move "worldbuilding/"" part to prefix / main cfg
export class ExcerptsController {
  constructor(private readonly excerptsService: ExcerptsService) {}

  @Get()
  findMany() {
    return this.excerptsService.findMany();
  }
}
