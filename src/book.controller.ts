import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "@prisma/client";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Controller()
export class BookController{
    constructor(private readonly bookService:BookService) {}

    @Get('books')
    async getBooks():Promise<Book[]> {
        return this.bookService.getAll()
    }
    @Get('books/:id')
    async getBookById(@Param('id') id: string): Promise<Book> {
        return this.bookService.getBook({id: (Number(id))});
    }

    @Post('books')
    async createBook(@Body() createBookDto: CreateBookDto): Promise<Book>{
        return this.bookService.createBook(createBookDto)
    }

    @Put('books/:id')
    async updateBook(@Param('id') id: string, @Body() updateBookDto:UpdateBookDto): Promise<Book> {
 
        return this.bookService.updateBook({
            where: {id: Number(id)},
            data: updateBookDto
        })
    }

    @Delete('books/:id')
    async deleteBook(@Param('id') id: string): Promise<Book> {
        return this.bookService.deleteBook({
            id: Number(id)
        })
    }

}