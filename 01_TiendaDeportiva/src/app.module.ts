import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {clientModule} from "./cliente/cliente.module";
import {inicioModule} from "./contacto/inicio.module";
import {productModule} from "./producto/producto.module";
import {proveedorModule} from "./proveedor/proveedor.module";

@Module({
  imports: [clientModule, inicioModule, productModule, proveedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
