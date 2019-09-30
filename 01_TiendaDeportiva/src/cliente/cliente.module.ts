import {Module} from "@nestjs/common";
import {ClienteService} from "./cliente.service";
import {ClienteController} from "./cliente.controller";

@Module({
    imports:[], //Modulo
    controllers:[ ClienteController ], // Controladores
    providers:[ ClienteService ], // Servicios
    exports:[ ClienteService ] // Servicios externos
})

export class clientModule {

}