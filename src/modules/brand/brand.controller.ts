import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { BrandService } from './brand.service'

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) {}

    @Get('get_all')
    async getAllBrand(
        @Query('page') page: number,
        @Query('size') size: number,
    ) {
        return this.brandService.getAllBrand({ page, size })
    }

    @Get('get_one/:id')
    getBrand(@Param('id') id: string) {
        return this.brandService.getBrand(id)
    }

    @Post('create')
    createBrand(@Body() data) {
        return this.brandService.createBrand({ ...data, id: undefined })
    }

    @Patch('update/:id')
    updateBrand(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.brandService.updateBrand(data)
    }

    @Delete('delete/:id')
    deleteBrand(@Param('id') id: string) {
        return this.brandService.deleteBrand(id)
    }
}
