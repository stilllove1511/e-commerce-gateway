import { Module } from '@nestjs/common';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CMS',
                transport: Transport.TCP,
            }
    ])],
    controllers: [CmsController],
    providers: [CmsService]
})
export class CmsModule { }
