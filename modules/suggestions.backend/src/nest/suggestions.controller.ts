import { Controller, Get } from '@nestjs/common';
import { SuggestionsService } from '../suggestions.service';

@Controller('suggestions')
export class SuggestionsController {
  constructor(private readonly suggestionsService: SuggestionsService) {}

  @Get()
  findMany() {
    return this.suggestionsService.findMany();
  }
}
