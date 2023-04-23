import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create_product.dto'
import { UpdateProductDto } from './dto/update_product.dto'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('get_all')
    async getAllProduct(
        @Query('page') page: number,
        @Query('size') size: number,
    ) {
        return this.productService.getAllProduct({ page, size })
    }

    @Get('get_one/:id')
    getProduct(@Param('id') id: string) {
        return this.productService.getProduct(id)
    }

    @Post('create')
    createProduct(@Body() data: CreateProductDto) {
        console.log(data)
        return this.productService.createProduct(data)
    }

    @Patch('update/:id')
    updateProduct(@Param('id') id: string, @Body() data: UpdateProductDto) {
        return this.productService.updateProduct({ ...data, id })
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id)
    }
}
