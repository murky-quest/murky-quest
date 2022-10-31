import { Controller, Get, Module } from '@nestjs/common';
import { UsersModule } from '@/modules/users';
import * as _ from 'lodash';

@Controller('app')
class AppController {
  @Get('lodash/version')
  findLodashVersion() {
    return {
      lodashVersion: _.VERSION,
    };
  }
}

@Module({
  controllers: [AppController],
  imports: [UsersModule],
})
export class AppModule {}
