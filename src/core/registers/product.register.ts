import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { PRODUCT_SERVICE } from '@src/utils/constants'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: PRODUCT_SERVICE,
                transport: Transport.TCP,
                options: {
                    host: process.env.PRODUCT_HOST,
                    port: parseInt(process.env.PRODUCT_PORT),
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class ProductRegister {}
