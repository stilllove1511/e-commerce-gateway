import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService,
    ) { }

    @Get()
    getAllCompany() {
        return this.companyService.getAllCompany();
    }

    @Get(':id')
    getCompany(@Param('id') id: string) {
        return this.companyService.getCompany(id);
    }

    @Post('create')
    createCompany(@Body() data) {
        return this.companyService.createCompany(data);
    }

    @Patch('update/:id')
    updateCompany(@Param('id') id:string,@Body() data) {
        return this.companyService.updateCompany({...data,id});
    }

    @Delete('delete/:id')
    deleteCompany(@Param('id') id:string) {
        return this.companyService.deleteCompany(id);
    }
}