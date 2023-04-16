import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    // private readonly appService: AppService,/
    // @Inject('CMS') private readonly cmsClient: ClientProxy,
    ) {
    
  }

  // @Get()
  // getHello(): string {
    // return this.appService.getHello();
  // }

  // @Post()
  // createUser(@Body() createUserRequest: CreateUserRequest) {
  //   this.appService.createUser(createUserRequest);
  // }

  // @Get('analytics')
  // getAnalytics() {
  //   return this.appService.getAnalytics();
  // }

  // @Get('test')
  // test(){
  //   return this.appService.test()
  // }
  // @Get('company/:id')
  // getCompanyById(@Param('id') id:string){
  //   console.log(id)
  //   return this.cmsClient.send('company', id);
  // }
}
