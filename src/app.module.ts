import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CmsModule } from './modules/cms/cms.module';

@Module({
  imports: [
    CmsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
