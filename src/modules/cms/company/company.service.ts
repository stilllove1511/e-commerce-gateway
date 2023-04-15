import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CompanyService {
    constructor(
        @Inject('CMS') private readonly cmsClient: ClientProxy,
    ) { }

    getCompany(id: string) {
        return this.cmsClient.send('get_company', id);;
    }

    createCompany(data) {
        return this.cmsClient.send('create_company', data);;
    }

    updateCompany(data) {
        return this.cmsClient.send('update_company', data);;
    }
}
