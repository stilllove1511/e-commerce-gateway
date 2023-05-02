import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { ACCOUNT_SERVICE } from '@src/utils/constants'
import { ACCOUNT_PATTERN } from '@src/utils/enums/account.enum'

@Injectable()
export class AccountService {
    constructor(
        @Inject(ACCOUNT_SERVICE) private readonly accountClient: ClientProxy,
    ) {}

    getAllAccount({ page, size }) {
        return this.accountClient.send(ACCOUNT_PATTERN.account_get_all, {
            page,
            size,
        })
    }

    getAccount(id: string) {
        return this.accountClient.send(ACCOUNT_PATTERN.account_get_one, id)
    }

    createAccount(data) {
        return this.accountClient.send(ACCOUNT_PATTERN.account_create, data)
    }

    updateAccount(data) {
        return this.accountClient.send(ACCOUNT_PATTERN.account_update, data)
    }

    deleteAccount(id: string) {
        return this.accountClient.send(ACCOUNT_PATTERN.account_delete, id)
    }

    login(data) {
        return this.accountClient.send(ACCOUNT_PATTERN.login, data)
    }

    register(data) {
        return this.accountClient.send(ACCOUNT_PATTERN.register, data)
    }

    updatePassword(data) {
        return this.accountClient.send(ACCOUNT_PATTERN.updatePassword, data)
    }

    detailAdmin(data) {
        return this.accountClient.send(ACCOUNT_PATTERN.detailAdmin, data)
    }
    v
}
