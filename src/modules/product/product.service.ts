import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { PRODUCT_SERVICE } from '@src/utils/constants'
import { PRODUCT_PATTERN } from '@src/utils/enums/product.enum'

@Injectable()
export class ProductService {
    constructor(
        @Inject(PRODUCT_SERVICE) private readonly productClient: ClientProxy,
    ) {}

    getAllProduct({ page, size }) {
        return this.productClient.send(PRODUCT_PATTERN.product_get_all, {
            page,
            size,
        })
    }

    getProduct(id: string) {
        return this.productClient.send(PRODUCT_PATTERN.product_get_one, id)
    }

    createProduct(data) {
        return this.productClient.send(PRODUCT_PATTERN.product_create, data)
    }

    updateProduct(data) {
        return this.productClient.send(PRODUCT_PATTERN.product_update, data)
    }

    deleteProduct(data) {
        return this.productClient.send(PRODUCT_PATTERN.product_delete, data)
    }
}
