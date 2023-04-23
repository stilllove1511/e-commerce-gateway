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
import { CartService } from './cart.service'

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get('get_all')
    async getAllCart(@Query('page') page: number, @Query('size') size: number) {
        return this.cartService.getAllCart({ page, size })
    }

    @Get('get_one/:id')
    getCart(@Param('id') id: string) {
        return this.cartService.getCart(id)
    }

    @Post('create')
    createCart(@Body() data) {
        return this.cartService.createCart({ ...data, id: undefined })
    }

    @Patch('update/:id')
    updateCart(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.cartService.updateCart(data)
    }

    @Delete('delete/:id')
    deleteCart(@Param('id') id: string) {
        return this.cartService.deleteCart(id)
    }
}
