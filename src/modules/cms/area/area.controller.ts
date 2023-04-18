import { Controller, Get, Query } from '@nestjs/common';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
    constructor(private readonly areaService: AreaService) {}

    @Get('list_all')
    getAllArea(@Query('page') page: number, @Query('size') size: number) {
        return this.areaService.getAllArea({
            page,
            size,
        });
    }
}
