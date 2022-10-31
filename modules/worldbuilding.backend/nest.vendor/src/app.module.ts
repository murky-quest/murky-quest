import { Module } from '@nestjs/common';
import { ExcerptsModule } from '@module/excerpts/nest';
@Module({
  imports: [ExcerptsModule],
})
export class AppModule {}
