import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ORDER_SERVICE } from '@src/utils/constants'
import * as dotenv from 'dotenv'
dotenv.config()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: ORDER_SERVICE,
                transport: Transport.TCP,
                options: {
                    host: process.env.ORDER_HOST,
                    port: parseInt(process.env.ORDER_PORT) || 80,
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class OrderRegister {}
