import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/cms/company/company.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    CompanyModule,
    RouterModule.register([
      {
        path: 'cms',
        module: CompanyModule,
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
