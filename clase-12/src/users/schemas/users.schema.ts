import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"; //Para que funcione como un modelo en express


@Schema()
export class UserModel {
    @Prop({required: true})
    first_name: string
    @Prop({required: true})
    last_name: string
    @Prop({required: true, unique: true})
    email: string
    @Prop({required: true})
    password: string
    @Prop({required: true})
    age: number
}

export type UsersDocument = HydratedDocument<UserModel >

export const userSchema = SchemaFactory.createForClass(UserModel)