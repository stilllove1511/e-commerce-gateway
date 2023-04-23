import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CompanyModule } from './modules/cms/company/company.module';
// import { AreaModule } from './modules/cms/area/area.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './utils/http-error.filter'
import { ProductModule } from './modules/product/product.module'
import { BrandModule } from './modules/brand/brand.module'
import { CategoryModule } from './modules/category/category.module'

@Module({
    imports: [
        // CompanyModule,
        // AreaModule,
        ProductModule,
        BrandModule,
        CategoryModule,
        // RouterModule.register([
        //     {
        //         path: 'cms',
        //         module: CompanyModule,
        //     },
        //     {
        //         path: 'cms',
        //         module: AreaModule,
        //     },
        // ]),
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
