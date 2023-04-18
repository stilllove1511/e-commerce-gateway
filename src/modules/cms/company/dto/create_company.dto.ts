import { IsString, IsNotEmpty } from 'class-validator'

export class CreateCompanyDto {
    @IsNotEmpty() // Trường này bắt buộc
    @IsString()
    uniqueName: string
}
