import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/cms/company/company.module';
import { APP_FILTER, RouterModule } from '@nestjs/core';
import { HttpErrorFilter } from './utils/http-error.filter';

@Module({
  imports: [
    CompanyModule,
    RouterModule.register([
      {
        path: 'cms',
        module: CompanyModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
