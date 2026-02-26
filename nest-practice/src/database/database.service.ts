/* eslint-disable prettier/prettier */
import { Injectable,OnModuleInit,OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected=false;

    onModuleInit(){
      this.isConnected=true;
      console.log('Database connected');
    }

    onApplicationShutdown(signal:string){
      this.isConnected=false;
      console.log(`DB disconnected due to shutdown.Signal ${signal}`)
    }

    getStatus(){
      return this.isConnected ?'Connected':'disconnect'
    }
    
}
