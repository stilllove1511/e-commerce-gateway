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
import { CategoryService } from './category.service'

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get('get_all')
    async getAllCategory(
        @Query('page') page: number,
        @Query('size') size: number,
    ) {
        return this.categoryService.getAllCategory({ page, size })
    }

    @Get('get_one/:id')
    getCategory(@Param('id') id: string) {
        return this.categoryService.getCategory(id)
    }

    @Post('create')
    createCategory(@Body() data) {
        return this.categoryService.createCategory({ ...data, id: undefined })
    }

    @Patch('update/:id')
    updateCategory(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.categoryService.updateCategory(data)
    }

    @Delete('delete/:id')
    deleteCategory(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.categoryService.deleteCategory(data)
    }
}
