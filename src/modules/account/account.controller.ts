import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common'
import { AccountService } from './account.service'

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get('get_all')
    async getAllAccount(
        @Query('page') page: number,
        @Query('size') size: number,
    ) {
        return this.accountService.getAllAccount({ page, size })
    }

    @Get('get_one/:id')
    getAccount(@Param('id') id: string) {
        return this.accountService.getAccount(id)
    }

    @Post('create')
    createAccount(@Body() data) {
        return this.accountService.createAccount({ ...data, id: undefined })
    }

    @Patch('update/:id')
    updateAccount(@Param('id') id: string, @Body() data) {
        data.id = id
        return this.accountService.updateAccount(data)
    }

    @Delete('delete/:id')
    deleteAccount(@Param('id') id: string) {
        return this.accountService.deleteAccount(id)
    }

    @Post('login')
    login(@Body() data) {
        return this.accountService.login(data)
    }

    @Post('register')
    register(@Body() data) {
        return this.accountService.register(data)
    }

    @Post('password/update')
    updatePassoword(@Body() data) {
        return this.accountService.updatePassword(data)
    }
}
