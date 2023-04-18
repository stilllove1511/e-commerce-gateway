import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CMSRegister } from '@src/core/registers/cms.register';

@Module({
    imports: [CMSRegister],
    controllers: [CompanyController],
    providers: [CompanyService],
})
export class CompanyModule {}
