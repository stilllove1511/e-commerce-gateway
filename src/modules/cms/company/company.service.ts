import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CMS } from '@src/core/utils/constants';

@Injectable()
export class CompanyService {
    constructor(
        @Inject(CMS) private readonly cmsClient: ClientProxy,
    ) { }

    getAllCompany() {
        return this.cmsClient.send('get_all_company','');
    }

    getCompany(id: string) {
        return this.cmsClient.send('get_company', id);;
    }

    createCompany(data) {
        return this.cmsClient.send('create_company', data);;
    }

    updateCompany(data) {
        return this.cmsClient.send('update_company', data);;
    }

    deleteCompany(id:string) {
        return this.cmsClient.send('delete_company', id);
    }
}
