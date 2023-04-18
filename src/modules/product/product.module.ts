import { Module } from '@nestjs/common'
import { ProductRegister } from '@src/core/registers/product.register'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'

@Module({
    imports: [ProductRegister],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {}
