import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { PRODUCT_SERVICE } from '@src/utils/constants'
import { CATEGORY_PATTERN } from '@src/utils/enums/category.enum'

@Injectable()
export class CategoryService {
    constructor(
        @Inject(PRODUCT_SERVICE) private readonly productClient: ClientProxy,
    ) {}

    getAllCategory({ page, size }) {
        return this.productClient.send(CATEGORY_PATTERN.category_get_all, {
            page,
            size,
        })
    }

    getCategory(id: string) {
        return this.productClient.send(CATEGORY_PATTERN.category_get_one, id)
    }

    createCategory(data) {
        return this.productClient.send(CATEGORY_PATTERN.category_create, data)
    }

    updateCategory(data) {
        return this.productClient.send(CATEGORY_PATTERN.category_update, data)
    }

    deleteCategory(data) {
        return this.productClient.send(CATEGORY_PATTERN.category_delete, data)
    }
}
