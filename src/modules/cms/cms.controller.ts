import { Controller, Get, Param } from '@nestjs/common';
import { CmsService } from './cms.service';

@Controller()
export class CmsController {
    constructor(
        private readonly cmsService: CmsService,
    ) { }

    @Get('company/:id')
    getCompany(@Param('id') id: string) {
        return this.cmsService.getCompany(id);
    }
}