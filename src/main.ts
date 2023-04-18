import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    const port = process.env.PORT || 8080
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(
        new ValidationPipe({
            enableDebugMessages: true,
        }),
    )
    await app.listen(port, () => {
        console.log('Gateway is running on the port ' + port)
    })
}
bootstrap()
