import { Module } from '@nestjs/common'
import { OrderRegister } from '@src/core/registers/orer.register'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'

@Module({
    imports: [OrderRegister],
    controllers: [OrderController],
    providers: [OrderService],
})
export class OrderModule {}
