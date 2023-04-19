import { Module } from '@nestjs/common'
import { ProductRegister } from '@src/core/registers/product.register'
import { BrandService } from './brand.service'
import { BrandController } from './brand.controller'

@Module({
    imports: [ProductRegister],
    controllers: [BrandController],
    providers: [BrandService],
})
export class BrandModule {}
