import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import FirstMiddleware from './middlewares/FirstMiddleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, 
    CartModule,
    MongooseModule.forRootAsync({ 
      imports:[ConfigModule], //Importo para poder trabajar con var de entorno
      inject:[ConfigService], //Inyecto las variables de entorno
      useFactory: async(config:ConfigService)=> ({
        uri: config.get<string>("URL_DBB") //Consulto a la variable de entorno
      })
    })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes({path: "*", method: RequestMethod.ALL}) //Voy a implementar este middleware en todas las rutas de todos los metodos
  }
}
