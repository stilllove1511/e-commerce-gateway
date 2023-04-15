import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CMS',
                transport: Transport.TCP,
            }
    ])],
    exports:[ClientsModule]
})
export class RegisterModule { }