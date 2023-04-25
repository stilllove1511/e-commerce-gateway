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
import { OrderService } from './order.service'

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get('get_all')
    async getAllOrder(
        @Query('page') page: number,
        @Query('size') size: number,
        @Body() data,
    ) {
        return this.orderService.getAllOrder({ page, size, token: data.token })
    }

    @Get('get_one/:id')
    getOrder(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.orderService.getOrder(data)
    }

    @Post('create')
    createOrder(@Body() data) {
        return this.orderService.createOrder({ ...data, id: undefined })
    }

    @Patch('update/:id')
    updateOrder(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.orderService.updateOrder(data)
    }

    @Delete('delete/:id')
    deleteOrder(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.orderService.deleteOrder(data)
    }
}
