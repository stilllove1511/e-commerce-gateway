import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { PRODUCT_SERVICE } from '@src/utils/constants'
import * as dotenv from 'dotenv'
dotenv.config()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: PRODUCT_SERVICE,
                transport: Transport.TCP,
                options: {
                    host: process.env.PRODUCT_HOST,
                    port: parseInt(process.env.PRODUCT_PORT) || 80,
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class ProductRegister {}
