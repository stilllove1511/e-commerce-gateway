import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CMS } from '@src/utils/constants';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: CMS,
                transport: Transport.TCP,
                options: {
                    port: parseInt(process.env.CMS_PORT) || 8081,
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class CMSRegister {}
