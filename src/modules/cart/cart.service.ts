import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { ORDER_SERVICE } from '@src/utils/constants'
import { CART_PATTERN } from '@src/utils/enums/cart.enum'

@Injectable()
export class CartService {
    constructor(
        @Inject(ORDER_SERVICE) private readonly orderClient: ClientProxy,
    ) {}

    getAllCart({ page, size, token }) {
        return this.orderClient.send(CART_PATTERN.cart_get_all, {
            page,
            size,
            token,
        })
    }

    getCart(id: string) {
        return this.orderClient.send(CART_PATTERN.cart_get_one, id)
    }

    createCart(data) {
        return this.orderClient.send(CART_PATTERN.cart_create, data)
    }

    updateCart(data) {
        return this.orderClient.send(CART_PATTERN.cart_update, data)
    }

    deleteCart(id: string) {
        return this.orderClient.send(CART_PATTERN.cart_delete, id)
    }
}
