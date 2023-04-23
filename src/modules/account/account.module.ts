import { Module } from '@nestjs/common'
import { AccountRegister } from '@src/core/registers/account.register'
import { AccountService } from './account.service'
import { AccountController } from './account.controller'

@Module({
    imports: [AccountRegister],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AccountModule {}
