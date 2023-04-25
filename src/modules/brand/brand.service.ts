import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { PRODUCT_SERVICE } from '@src/utils/constants'
import { BRAND_PATTERN } from '@src/utils/enums/brand.enum'

@Injectable()
export class BrandService {
    constructor(
        @Inject(PRODUCT_SERVICE) private readonly productClient: ClientProxy,
    ) {}

    getAllBrand({ page, size }) {
        return this.productClient.send(BRAND_PATTERN.brand_get_all, {
            page,
            size,
        })
    }

    getBrand(id: string) {
        return this.productClient.send(BRAND_PATTERN.brand_get_one, id)
    }

    createBrand(data) {
        return this.productClient.send(BRAND_PATTERN.brand_create, data)
    }

    updateBrand(data) {
        return this.productClient.send(BRAND_PATTERN.brand_update, data)
    }

    deleteBrand(data) {
        return this.productClient.send(BRAND_PATTERN.brand_delete, data)
    }
}
