import { Module } from '@nestjs/common';
import { SuggestionsModule } from '@module/nest';
@Module({
  imports: [SuggestionsModule],
})
export class AppModule {}
