import { Module } from '@nestjs/common';
import { CMSRegister } from '@src/core/registers/cms.register';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';

@Module({
    imports: [CMSRegister],
    controllers: [AreaController],
    providers: [AreaService],
})
export class AreaModule {}
