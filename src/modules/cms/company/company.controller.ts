import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService,
    ) { }

    @Get(':id')
    getCompany(@Param('id') id: string) {
        return this.companyService.getCompany(id);
    }

    @Post('create')
    createCompany(@Body() data) {
        return this.companyService.createCompany(data);
    }

    @Post('update/:id')
    updateCompany(@Param('id') id:string,@Body() data) {
        return this.companyService.updateCompany({...data,id});
    }
}