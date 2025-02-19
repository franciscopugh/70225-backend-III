import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserModel, UsersDocument } from './schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserModel.name) private usersModel: Model <UsersDocument>) {}

  async create(createUser: User) {
    return await this.usersModel.create(createUser)
  }

  async findAll() {
    return await this.usersModel.find()
  }

  async findOne(id: string) {
    const user = await this.usersModel.findById(id)
    if(!user)
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`)
    return user
  }

  async update(id: string, updateUser: Partial<User>) {
    /*
    const indice = this.users.findIndex(user => user._id == id)
    if(indice === -1) 
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`)
    this.users[indice] = {...this.users[indice], ...updateUser} //Genero una copia del usuario actual mas la actualizacion 
    return this.users[indice]*/

    const user = await this.usersModel.findByIdAndUpdate(id, updateUser)
    if(!user)
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`)
    return user
  }

  async remove(id: string) {
    const user = await this.usersModel.findByIdAndDelete(id)
    if(!user)
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`)
    
    return user
  }
}
