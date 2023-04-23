import { Module } from '@nestjs/common'
import { OrderRegister } from '@src/core/registers/order.register'
import { CartService } from './cart.service'
import { CartController } from './cart.controller'

@Module({
    imports: [OrderRegister],
    controllers: [CartController],
    providers: [CartService],
})
export class CartModule {}
