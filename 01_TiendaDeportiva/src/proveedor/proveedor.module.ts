import {Module} from "@nestjs/common";
import {ProveedorController} from "./proveedor.controller";
import {ProveedorService} from "./proveedor.service";

@Module({
    imports:[], //Modulo
    controllers:[ ProveedorController ], // Controladores
    providers:[ ProveedorService ], // Servicios
    exports:[ ProveedorService ] // Servicios externos
})

export class proveedorModule {

}