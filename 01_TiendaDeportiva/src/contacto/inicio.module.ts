import {Module} from "@nestjs/common";
import {InicioService} from "./inicio.service";
import {InicioController} from "./inicio.controller";

@Module({
    imports:[], //Modulo
    controllers:[ InicioController ], // Controladores
    providers:[ InicioService ], // Servicios
    exports:[ InicioService ] // Servicios externos
})

export class inicioModule {

}