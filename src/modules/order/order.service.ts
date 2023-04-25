import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { ORDER_SERVICE } from '@src/utils/constants'
import { ORDER_PATTERN } from '@src/utils/enums/order.enum'

@Injectable()
export class OrderService {
    constructor(
        @Inject(ORDER_SERVICE) private readonly orderClient: ClientProxy,
    ) {}

    getAllOrder({ page, size, token }) {
        return this.orderClient.send(ORDER_PATTERN.order_get_all, {
            page,
            size,
            token,
        })
    }

    getOrder(data) {
        return this.orderClient.send(ORDER_PATTERN.order_get_one, data)
    }

    createOrder(data) {
        return this.orderClient.send(ORDER_PATTERN.order_create, data)
    }

    updateOrder(data) {
        return this.orderClient.send(ORDER_PATTERN.order_update, data)
    }

    deleteOrder(data) {
        return this.orderClient.send(ORDER_PATTERN.order_delete, data)
    }
}
