import {Module} from "@nestjs/common";
import {ProductoController} from "./producto.controller";
import {ProductoService} from "./producto.service";

@Module({
    imports:[], //Modulo
    controllers:[ ProductoController ], // Controladores
    providers:[ ProductoService ], // Servicios
    exports:[ ProductoService ] // Servicios externos
})

export class productModule {

}