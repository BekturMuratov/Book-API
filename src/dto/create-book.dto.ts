import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty()
    title: string

    @ApiProperty()
    author: string

    @ApiProperty()
    publishYear: number
}