import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CmsService {
    constructor(
        @Inject('CMS') private readonly cmsClient: ClientProxy,
    ) { }

    getCompany(id: string) {
        return this.cmsClient.send('company', id);;
    }
}
