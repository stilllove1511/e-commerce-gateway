import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  async catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    let status: number;
    let code: number;
    let message: string|string[]

    switch (exception.constructor) {
        case HttpException:
            status = HttpStatus.BAD_REQUEST
            code = (exception as HttpException).getStatus()
            message = exception.message
            break
        case BadRequestException:
            status = HttpStatus.BAD_REQUEST
            code = exception.getStatus()
            message = exception.response.message || exception.message
            break
        case ForbiddenException:
            status = HttpStatus.BAD_REQUEST
            code = exception.getStatus()
            message = exception.message
            break
        case UnauthorizedException:
            status = HttpStatus.UNAUTHORIZED
            code = HttpStatus.UNAUTHORIZED
            message = exception.message
            break
        default:
            status =
                exception?.response?.statusCode ||
                HttpStatus.INTERNAL_SERVER_ERROR
            code =
                exception?.response?.statusCode ||
                HttpStatus.INTERNAL_SERVER_ERROR
    }

    const errorResponse = {
        code: code,
        message: message || undefined,
    }

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );

    response.status(status).json(errorResponse);
  }
}
