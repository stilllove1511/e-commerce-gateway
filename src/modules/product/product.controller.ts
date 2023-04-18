import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAllProduct(
        @Query('page') page: number,
        @Query('size') size: number,
    ) {
        return this.productService.getAllProduct({ page, size })
    }

    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.productService.getProduct(id)
    }

    @Post('create')
    createProduct(@Body() data) {
        return this.productService.createProduct({ ...data, id: undefined })
    }

    @Patch('update/:id')
    updateProduct(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.productService.updateProduct(data)
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id)
    }
}
