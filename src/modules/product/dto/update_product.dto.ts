import { Transform } from 'class-transformer'
import { IsOptional } from 'class-validator'

export class UpdateProductDto {
    // @IsOptional()
    name: string

    @IsOptional()
    price: string

    // @IsOptional()
    brand: {
        id: string
    }

    // @IsOptional()
    categories: {
        id: string
    }[]

    // @IsOptional()
    @Transform(({ value }) => {
        return value.map((attribute) => {
            delete attribute.id
            return attribute
        })
    })
    attributes: {
        name: string
        description: string
    }[]
}
