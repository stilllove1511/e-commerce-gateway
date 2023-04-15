import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { RegisterModule } from '@src/core/register/register.module';

@Module({
    imports: [RegisterModule],
    controllers: [CompanyController],
    providers: [CompanyService]
})
export class CompanyModule { }
