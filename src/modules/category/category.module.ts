import { Module } from '@nestjs/common'
import { ProductRegister } from '@src/core/registers/product.register'
import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'

@Module({
    imports: [ProductRegister],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}
