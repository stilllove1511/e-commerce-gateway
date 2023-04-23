import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ORDER_SERVICE } from '@src/utils/constants'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: ORDER_SERVICE,
                transport: Transport.TCP,
                options: {
                    port: parseInt(process.env.ORDER_PORT) || 8082,
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class OrderRegister {}
