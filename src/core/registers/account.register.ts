import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ACCOUNT_SERVICE } from '@src/utils/constants'
import * as dotenv from 'dotenv'
dotenv.config()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: ACCOUNT_SERVICE,
                transport: Transport.TCP,
                options: {
                    host: process.env.ACCOUNT_HOST,
                    port: parseInt(process.env.ACCOUNT_PORT),
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class AccountRegister {}
