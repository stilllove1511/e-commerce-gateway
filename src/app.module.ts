import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/cms/company/company.module';
import { APP_FILTER, RouterModule } from '@nestjs/core';
import { HttpErrorFilter } from './utils/http-error.filter';
import { AreaModule } from './modules/cms/area/area.module';
import { ProductModule } from './modules/product/product.module'
import { BrandModule } from './modules/brand/brand.module'

@Module({
    imports: [
        CompanyModule,
        AreaModule,
        ProductModule,
        BrandModule,
        RouterModule.register([
            {
                path: 'cms',
                module: CompanyModule,
            },
            {
                path: 'cms',
                module: AreaModule,
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
