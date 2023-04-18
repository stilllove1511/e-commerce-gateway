import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CMS } from '@src/utils/constants';

@Injectable()
export class AreaService {
    constructor(@Inject(CMS) private readonly cmsClient: ClientProxy) {}

    getAllArea({ page = 1, size = 10 }) {
        return this.cmsClient.send('get_all_area', {
            page,
            size,
        });
    }
}
