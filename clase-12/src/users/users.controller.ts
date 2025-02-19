import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private config: ConfigService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) //Devuelve status 201
  create(@Body() createUser: User) {
    
    return this.usersService.create(createUser);
  }

  @Get()
  findAll() {
    console.log(this.config.get<string>("SALUDO"));
    this.config.set<string>("ADIOS", "ADIOOSSSSSSSSSSSSS") //Genero variables de entorno a nivel de ejecucion
    console.log(this.config.get<string>("ADIOS"));
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: Partial<User>) {
    return this.usersService.update(id, updateUser);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
