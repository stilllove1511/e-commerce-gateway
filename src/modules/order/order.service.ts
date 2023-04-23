import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { ORDER_SERVICE } from '@src/utils/constants'
import { ORDER_PATTERN } from '@src/utils/enums/order.enum'

@Injectable()
export class OrderService {
    constructor(
        @Inject(ORDER_SERVICE) private readonly orderClient: ClientProxy,
    ) {}

    getAllOrder({ page, size }) {
        return this.orderClient.send(ORDER_PATTERN.order_get_all, {
            page,
            size,
        })
    }

    getOrder(id: string) {
        return this.orderClient.send(ORDER_PATTERN.order_get_one, id)
    }

    createOrder(data) {
        return this.orderClient.send(ORDER_PATTERN.order_create, data)
    }

    updateOrder(data) {
        return this.orderClient.send(ORDER_PATTERN.order_update, data)
    }

    deleteOrder(id: string) {
        return this.orderClient.send(ORDER_PATTERN.order_delete, id)
    }
}
